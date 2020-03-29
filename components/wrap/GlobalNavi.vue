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
        color: #fff;
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
            border-left: solid 0.4rem #fff;
            border-top: solid 0.4rem transparent;
            border-bottom: solid 0.4rem transparent;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
        }
    }
    &_link{
        color:#fff;
    }
    &_btn{
        display: none;
    }
}

@include sp{
    .globalNavi{
        position: fixed;
        right: 0;
        width: 60vw;
        height: 100vh;
        z-index: 9999999;
        top: 0;
        transform: translateX(100%);
        transition: .3s;
        background-color: $color-main;
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
            width: 55px;
            height: 55px;
            display: block;
            background: #fff;
            position: absolute;
            top: 5px;
            left: -60px;
            border: none;
            border-radius: 50%;
            border: solid thin $color-main;
            &::before{
                content:'MENU';
                font-size: 10px;
                color: $color-main;
                position: absolute;
                bottom: 8px;
                left: 50%;
                transform: translateX(-50%);
                font-weight: 700;
            }
        }
        &_btnInner{
            width: 20px;
            height: 2px;
            background-color: $color-main;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top: -6px;
            transition: .3s;
            &::before{
                content: '';
                width: 20px;
                height: 2px;
                background-color: $color-main;
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
                background-color: $color-main;
                display: inline-block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, calc(-55% + 5px));
                transition: .3s;
            }
        }
    }
};
</style>