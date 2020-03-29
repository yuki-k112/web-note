<template lang='pug'>
.wrapper(:class='setNaviState')
    .wrapper_side
        GlobalHeader
        GlobalNavi(@clickNaviBtn='toggleGlobalNavi')
    .wrapper_main
        nuxt

</template>

<script>
import GlobalHeader from '~/components/wrap/GlobalHeader'
import GlobalNavi from '~/components/wrap/GlobalNavi'

export default {
    scrollToTop: true,
    components:{
        GlobalHeader,
        GlobalNavi
    },
    data:function(){
        return {
            isOpen:false,
        }
    },
    computed:{
        setNaviState:function(){
            if(!this.isOpen){return};
            return 'open'
        }
    },
    methods:{
        toggleGlobalNavi:function(){
            if (this.isOpen){
                this.isOpen = false
            } else {
                this.isOpen = true
            }
        }
    },
    watch:{
        $route:function(){
            this.isOpen = false;
        }
    }
}

</script>

<style lang='scss'>
.wrapper{
    min-height: 100vh;
    background-color: $color-bg-sub;
    &_side{
        width: 180px;
        background-image: linear-gradient(60deg, #96deda 0%, #09d2a3 100%);
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 2rem 1rem 2rem 2rem;
        .globalHeader{
            position: absolute;
            top: 2rem;
            width: 190px;
        }
        .globalNavi{
            margin-top: 15rem;
        }
    }
    &_main{
        margin-left: 180px;
        padding: 3rem;
    }
}

@include sp{
    .wrapper{
        border-bottom: solid 1rem $color-main;
        &_side{
            position: static;
            width: 100%;
            height: auto;
            padding: 1rem 0 0;
            background-size: 100% calc(100% - 2.5rem);
            background-repeat: no-repeat;
            background-position: top;
        }
        &_main{
            margin-left: 0;
            padding: 2rem 1rem 1rem;
        }
        .globalHeader{
            width: 100%;
            border-radius: 0;
            margin: auto;
            position: relative;
            top: 0;
        }
        .globalNavi{
            margin-top: 0;
        }
    }
    .open.wrapper{
        &::before{
            content: '';
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999;
            background-color: #000;
            opacity: 0.5;
        }
        .globalNavi{
            transform: translateX(0);
            &_btnInner{
                width: 0;
            }
            &_btnInner::before{
                transform: translate(-50%, -50%) rotate(45deg);
                transform-origin: center;
            }
            &_btnInner::after{
                transform: translate(-50%, -50%) rotate(-45deg);
                transform-origin: center;
            }
        }
    }
};
</style>
