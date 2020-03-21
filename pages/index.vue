<template lang='pug'>
main.index
    SectionTitle(
        level=1
        title='New Arrival' 
        lead='新着記事一覧'
    )
    CardList(
        :articleData='articleData'
    )
</template>

<script>
import CardList from "~/components/wrap/CardList"
import SectionTitle from "~/components/element/SectionTitle"

export default {
    components:{
        CardList,
        SectionTitle
    },
    computed:{
        articleData:function(){
            return this.$store.state.contents.article
        },
    }
}

</script>

<style lang='scss'>
.index{
    padding-left: 2rem;
    &_header{
        display: block;
        color: $color-main;
        margin-bottom: 2rem;
        position: relative;
        padding-left: 2rem;
        &::before{
            content: '';
            border-top: solid 0.75rem $color-main;
            border-left: solid 0.5rem transparent;
            border-right: solid 0.5rem transparent;
            display: block;
            position: absolute;
            left: 0;
            top: 1.25em;
        }
    }
    &_title{
        font-size: $text-larger;
    }
}
</style>
