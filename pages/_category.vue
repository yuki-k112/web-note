<template>
<nuxt-child></nuxt-child>

</template>

<script>
export default {
    validate ({ params, store }) {
        const categories = store.getters['contents/getCategories'].map(item => item.path)
        return categories.some(category => category === params.category);
    }
}       
</script>