<template>
<nuxt-child></nuxt-child>

</template>

<script>
export default {
    async validate ({ params, store }) {
        const categories = await store.getters['contents/getCategories'].map(item => {
            return item.toLowerCase().replace( /\// , "-" )
        })
        return categories.some(category => category === params.category);
  }
}
</script>