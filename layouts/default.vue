<template lang='pug'>
.wrapper
    .wrapper_side
        GlobalHeader
        GlobalNavi
    .wrapper_main
        nuxt

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
    &_side{
        width: 180px;
        background-image: linear-gradient(60deg, #96deda 0%, #09d2a3 100%);
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 2rem 1rem 2rem 2rem;
        .globalHeader{
            position: absolute;
            top: 2rem;
            width: 190px;
        }
        .globalNavi{
            margin-top: 15rem;
        }
    }
    &_main{
        margin-left: 210px;
        padding: 3rem;
    }
}
</style>
