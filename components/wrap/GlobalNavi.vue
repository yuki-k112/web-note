<template lang='pug'>
nav.globalNavi
    dl.globalNavi_categoryList
        dt.globalNavi_categoryTitle カテゴリー
        dd.globalNavi_category
            nuxt-link.globalNavi_link(to='/') Home
        dd.globalNavi_category(v-for='item in categories')
            nuxt-link.globalNavi_link(:to='"/"+item.path') {{item.title}}
</template>
<script>
export default {
    name:'GlobalNavi',
    data:function(){
        return {
            categories:[]
        }
    },
    mounted(){
        this.categories = this.$store.getters['contents/getCategories']
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
}
</style>