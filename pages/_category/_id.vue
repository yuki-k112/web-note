<template lang='pug'>
main
    ArticleArea(
        :title='article.title' 
        :body='article.body' 
        :date='article.date' 
        :updataDate='article.updatedAt' 
        :category='article.category.title' 
        :categoryPath='article.category.path' 
        :tags='article.tag' 
        :img='article.mainImg.url'
    )

</template>

<script>
import axios from 'axios'
import ArticleArea from  "~/components/wrap/ArticleArea";

export default {
    async validate ({ params, store }) {
        return store.state.contents.article.some(cont => cont.id === params.id)
    },
    components: {
        ArticleArea
    },
    data:function(){
        return {
            article:null,
        }
    },
    created() {        
        if (this.cont) { return } 
        const articles = this.$store.state.contents.article;
        const article = articles.filter(item => item.id === this.$route.params.id)
        this.article = article[0]
    },
    async asyncData (context) {        
        if (!context.payload) { return }
        return { article: context.payload }
    }
}


</script>

<style lang='scss'>
</style>
