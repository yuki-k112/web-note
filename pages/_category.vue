<template lang='pug'>
div.wrapper_transition
    nuxt-child(:key="$route.name")
</template>

<script>
export default {
    scrollToTop: true,
    validate ({ params, store }) {
        const categories = Array.from(store.getters['contents/getCategories']).map(item => item.path)
        return categories.some(category => category === params.category);
    }
}       
</script>