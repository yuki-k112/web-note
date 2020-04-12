<template lang='pug'>
main.index
    SectionTitle(
        level='1'
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
    padding: 4rem 2rem 4rem 5rem;
}

@include sp{
    .index{
        padding:0;
    }
};
</style>
