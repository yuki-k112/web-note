<template lang='pug'>
main
    h1 test

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
    created() {        
        if (this.cont) { return } 
        const articles = this.$store.state.contents.article;
        const article = articles.filter(item => item.id === this.$route.params.id)
        this.cont = article
    },
    async asyncData (payload) {        
        if (!payload) { return }
        return { cont: payload }
    }
}


</script>

<style lang='scss'>
</style>
