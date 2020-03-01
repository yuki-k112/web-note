<template lang='pug'>
.wrapper
    .inner
        GlobalHeader
        nuxt
    GlobalNavi

</template>

<script>
import GlobalHeader from '~/components/wrap/GlobalHeader'
import GlobalNavi from '~/components/wrap/GlobalNavi'

export default {
    components:{
       GlobalHeader,
       GlobalNavi
    }
}

</script>

<style lang='scss'>
.wrapper{
    min-height: 100vh;
    background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
    .globalNavi{
        width: 210px;
    }
    .inner{
        margin-left: 210px;
        padding: 3rem;
    }
}
</style>
