<template lang='pug'>
main.index
    SectionTitle(
        level='1'
        :title='findSectionTitle'
        lead='記事一覧'
    )
    CardList(
        :articleData='findArticle'
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
    head() {
        return {
            title: `${this.findSectionTitle}の記事一覧 | WEB NOTE`,
            meta: [
                { hid: 'description', name: 'description', content:`${this.findSectionTitle}についての記事一覧です` }
            ]
        }
    },
    computed:{
        getArticles:function(){
            return this.$store.state.contents.article;
        },
        findArticle:function(){
            return this.getArticles.filter(item => item.category.path === this.$route.params.category)
        },
        findSectionTitle:function(){
            return this.findArticle[0].category.title
        },
    }
}

</script>

<style lang='scss'>
</style>
