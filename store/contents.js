export const state = () => ({
    article:null,
})

  
export const mutations = {
    async setArticle(state,　res){  
        const trimDate = (prop) => {
            let target = prop.indexOf('T');
            return prop.slice(0, target);            
        }
        await res.forEach(cont => {
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
        return state.article
            .map(categories => 
                categories.category
            ).sort((a,b) => 
                a.type - b.type
            ).map(categories =>
                categories.title 
            ).filter((x, i, self) => 
                self.indexOf(x) === i
            )
    },
    getTags(state){
        const formatTags = (state) => {
            let tags = [];
            let tagBaseData = state.article.map(items => items.tag);
            tagBaseData.map(items => 
               items.forEach(item => tags.push(item))
            )
            return tags
        }

        return formatTags(state)
            .sort((a, b) =>
                a.type - b.type
            ).map(tag =>
                tag.tag
            ).filter((x, i, self) => 
                self.indexOf(x) === i
            )
    }
}


