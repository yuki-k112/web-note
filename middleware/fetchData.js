export default async ({ store }) => {
    if (store.state.article){return} 
    await store.dispatch('contents/fetchArticle')
}




