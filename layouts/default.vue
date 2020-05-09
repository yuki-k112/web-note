<template lang='pug'>
.wrapper(
    :class='setNaviState' 
    @touchmove='stopScroll'
)
    .wrapper_overlay(@click='toggleGlobalNavi')
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
            scrollHeight:0,
        }
    },
    computed:{
        setNaviState:function(){
            if(!this.isOpen){return};
            return 'open'
        },
    },
    methods:{
        toggleGlobalNavi:function(){
            if (this.isOpen){
                this.isOpen = false;
            } else {
                this.isOpen = true
            }
        },
        stopScroll:function(){
            if (!this.isOpen){return};
            event.preventDefault()
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
    &_side{
        width: 300px;
        z-index: 999;
        // background-image: linear-gradient(60deg, #96deda 0%, #09d2a3 100%);
        // background-color: #c5eceb;
        background-color: $color-bg-sub;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        .globalNavi{
            margin-top: 1.5rem;
        }
    }
    &_main{
        margin-left: 300px;
    }
    &_overlay{
        display: none;
    }
}

@include sp{
    .wrapper{
        border-bottom: solid 1rem $color-main;
        &_side{
            position: static;
            width: 100%;
            height: auto;
            padding:0;
            background-size: 100% calc(100% - 2.5rem);
            background-repeat: no-repeat;
            background-position: top;
            box-shadow: none;
        }
        &_main{
            margin-left: 0;
            padding: 1rem;
        }
        .globalHeader{
            width: 100%;
            border-radius: 0;
            margin: auto;
            position: relative;
            top: 0;
            background-color: #f6f9fa;
            padding: 0.75rem;
        }
        .globalNavi{
            margin-top: 0;
        }
    }
    .open.wrapper{
        .wrapper_overlay{
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999;
            background-color: #000;
            opacity: 0.5;
            display: block;
        }
    }
};
</style>
