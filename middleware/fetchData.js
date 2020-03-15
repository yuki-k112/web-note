export default ({ store }) => {
    if (store.state.article){return} 
    store.dispatch('contents/fetchArticle')
}




