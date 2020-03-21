<template lang='pug'>
main.index
    SectionTitle(
        level='1'
        title='New' 
        lead='新着記事一覧'
    )
    CardList(
        :articleData='articleData'
    )
</template>

<script>
import axios from "axios";
import CardList from "~/components/wrap/CardList"
import SectionTitle from "~/components/element/SectionTitle"

export default {
    components: {
        CardList,
        SectionTitle
    },
    data:function(){
        return {
            testUrl:'/'
        }
    },
    computed:{
        articleData:function(){
            const articles = this.$store.state.contents.article;            
            return articles.filter(item => item.category.path === this.$route.params.category)
        },
    },
    async asyncData({ app, error }) {
    const { data } = await axios.get(
        "https://web-note.microcms.io/api/v1/article",{
            headers: { "X-API-KEY": process.env.API_KEY }
        }
    );
    return {
        items: data.contents
    };
    },
}

</script>

<style lang='scss'>
</style>
