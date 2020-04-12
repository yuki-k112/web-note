<template lang='pug'>
nav.globalNavi
    dl.globalNavi_categoryList
        dt.globalNavi_categoryTitle カテゴリー
        dd.globalNavi_category
            nuxt-link.globalNavi_link(to='/') Home
        dd.globalNavi_category(v-for='item in categories')
            nuxt-link.globalNavi_link(:to='"/"+item.path') {{item.title}}
    button.globalNavi_btn(@click='clickNaviBtn')
        span.globalNavi_btnInner
</template>
<script>
export default {
    name:'GlobalNavi',
    data:function(){
        return {
            categories:[],
        }
    },
    methods:{
        clickNaviBtn:function(){
            this.$emit('clickNaviBtn');
        }
    },
    mounted(){
        this.categories = this.$store.getters['contents/getCategories'];
    }
}
</script>
<style lang='scss'>
.globalNavi{
    &_categoryTitle{
        font-size: $text-large;
        color: $color-main;
    }
    &_category{
        margin-top: 1.5rem;
        font-weight: 700;
        position: relative;
        display: flex;
        padding-left: 1rem;
        &+&{
            margin-top: 1rem;
        }
        &::before{
            content: '';
            border-left: solid 0.4rem $color-main;
            border-top: solid 0.4rem transparent;
            border-bottom: solid 0.4rem transparent;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
        }
    }
    &_link{
        color:$color-main;
    }
    &_btn{
        display: none;
    }
}

@include sp{
    .globalNavi{
        position: fixed;
        right: 0;
        width: 70vw;
        height: 100vh;
        z-index: 9999999;
        top: 0;
        transform: translateX(100%);
        transition: .3s;
        background-color: #fff;
        padding:2rem;
        &_categoryTitle{
            width: 100%;
            font-size: $text-medium;
            margin-bottom: 1.5rem;
        }
        &_category{
            margin-top: 0;
            &+&{
                margin-top: 1rem;
            }
        }
        &_btn{
            width: 3.5rem;
            height: 3.5rem;
            display: block;
            background: $color-main;
            position: absolute;
            top:0.75rem;
            left: -4.25rem;
            border: none;
            border-radius:5px;
            border-right:0;
            transition: .3s;
            &::before{
                content:'MENU';
                font-size: 10px;
                color: #fff;
                position: absolute;
                bottom: 5px;
                left: 50%;
                transform: translateX(-50%);
                font-weight: 700;
            }
        }
        &_btnInner{
            width: 20px;
            height: 2px;
            background-color: #fff;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -6px;
            transition: .3s;
            &::before{
                content: '';
                width: 20px;
                height: 2px;
                background-color: #fff;
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, calc(-55% - 5px));
                transition: .3s;
            }
            &::after{
                content: '';
                width: 20px;
                height: 2px;
                background-color: #fff;
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, calc(-55% + 5px));
                transition: .3s;
            }
        }
    }
    .open .globalNavi{
        transform: translateY(0);
        box-shadow: $shadow-05;
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
};
</style>