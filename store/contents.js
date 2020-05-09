export const state = () => ({
    article:null,
})

  
export const mutations = {
    setArticle(state,　res){  
        const trimDate = (prop) => {
            let target = prop.indexOf('T');
            return prop.slice(0, target);            
        }
        res.forEach(cont => {
            cont.date = trimDate(cont.date);
            cont.updatedAt = trimDate(cont.updatedAt);
        })   
        state.article = res;
    },
}


export const actions = {
    async fetchArticle (context) {
        const res = await this.$axios.$get('https://web-note.microcms.io/api/v1/article', {
            headers: { "X-API-KEY": process.env.API_KEY }
        })
        context.commit('setArticle', res.contents)
    },
}


export const getters = {
    getCategories(state){
        const array = Array.from(state.article);
        const formatArray = array
            .map(items => items.category)
            .sort((a,b) => a.type - b.type)
            .filter((el, i, arry) => arry.findIndex(el2 => el.title === el2.title) === i)
        return formatArray
    },
    // getTags(state){
    //     const formatTags = (state) => {
    //         let tags = [];
    //         let tagBaseData = state.article.map(items => items.tag);
    //         tagBaseData.map(items => 
    //            items.forEach(item => tags.push(item))
    //         )
    //         return tags
    //     }

    //     return formatTags(state)
    //         .sort((a, b) =>
    //             a.type - b.type
    //         ).map(tag =>
    //             tag.tag
    //         ).filter((x, i, self) => 
    //             self.indexOf(x) === i
    //         )
    // }
}


