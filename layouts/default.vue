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
    background-color: $color-bg-sub;
    .globalNavi{
        width: 210px;
        background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
    }
    .inner{
        margin-left: 210px;
        padding: 3rem;
    }
}
</style>
