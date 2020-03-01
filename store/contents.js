export const state = () => ({
    article:null,
})
  
export const mutations = {
    setArticle(state,res){  
        state.article = res;
    },
    setCategory(state,res){
        state.category = res;
    },
    setTag(state,res){
        state.tag = res;
    },
}

export const actions = {
    async fetchArticle (context) {
        const res = await this.$axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
        context.commit('setArticle', res)
    },
    async fetchCategory (context) {
        const res = await this.$axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
        context.commit('setCategory', res)
    },
    async fetchTag (context) {
        const res = await this.$axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
        context.commit('setTag', res)
    }
}


