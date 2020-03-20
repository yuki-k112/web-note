<template>
<nuxt-child></nuxt-child>

</template>

<script>
export default {
    validate ({ params, store }) {
        const categories = Array.from(store.getters['contents/getCategories']).map(item => item.path)
        return categories.some(category => category === params.category);
    }
}       
</script>