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
    async asyncData ({ params, error, payload }) {        
        if (payload) {return { cont: payload }}
        else { 
            try {
                const article = await axios.get('https://web-note.microcms.io/api/v1/article', {
                    headers: { "X-API-KEY": process.env.API_KEY }
                })
                return {cont:article.data.contents}               
            } catch (error) { 
                console.log(error);
            }
        }        
    }
}


</script>

<style lang='scss'>
</style>
