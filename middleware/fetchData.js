export default async ({ store }) => {
    if (!store.state.article){
        await store.dispatch('contents/fetchArticle')
    } 
    if (!store.state.category){
        await store.dispatch('contents/fetchCategory')
    } 
    if (!store.state.tag){
        await store.dispatch('contents/fetchTag')
    } 
}




