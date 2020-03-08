export default async ({ store }) => {
    if (!store.state.article){
        await store.dispatch('contents/fetchArticle')
    } 
}




