<template lang='pug'>
nav.globalNavi
    dl.globalNavi_categoryList
        dt.globalNavi_categoryTitle カテゴリー
        dd.globalNavi_category(v-for='item in getCategories')
            nuxt-link.globalNavi_link(:to='item.path') {{item.title}}
</template>
<script>
export default {
    name:'GlobalNavi',
    computed:{
        getCategories:function(){
            return this.$store.state.getters.getCategories;
        },
    },
}
</script>
<style lang='scss'>
.globalNavi{
    max-width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 6rem 1rem 2rem 2rem;
    &_categoryTitle{
        font-size: $text-large;
        color: $color-sub;
    }
    &_category{
        margin-top: 2rem;
        font-size: $text-medium;
        font-weight: 700;
        position: relative;
        display: flex;
        padding-left: 1rem;
        &+&{
            margin-top: 1rem;
        }
        &::before{
            content: '';
            border-left: solid 0.5rem $color-sub;
            border-top: solid 0.5rem transparent;
            border-bottom: solid 0.5rem transparent;
            position: absolute;
            top: 0.25rem;
            left: 0;
        }
    }
    &_link{
        color: $color-sub;
    }
}
</style>