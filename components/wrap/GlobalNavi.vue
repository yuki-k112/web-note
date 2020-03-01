<template lang='pug'>
nav.globalNavi
    dl.globalNavi_categoryList
        dt.globalNavi_categoryTitle カテゴリー
        dd.globalNavi_category
            a.globalNavi_link Home
        dd.globalNavi_category
            a.globalNavi_link Develop
        dd.globalNavi_category
            a.globalNavi_link UI/UX
        dd.globalNavi_category
            a.globalNavi_link Interaction
        dd.globalNavi_category
            a.globalNavi_link Books

</template>

<script>
export default {
    name:'GlobalNavi',
      data:function(){
        return {
            testUrl:'/'
        }
    },
    async asyncData({ app, error }) {
    const { data } = await axios.get(
        "https://web-note.microcms.io/api/v1/categories", {
            headers: { "X-API-KEY": process.env.API_KEY }
        }
        );
        return {
            categories: data.contents
        };
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