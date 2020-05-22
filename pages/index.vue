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
    head() {
        return {
            title: 'WEB NOTE | フロントエンドやデザインについて色々書く場所',
            meta: [
                { hid: 'description', name: 'description', content:'フロントエンドやデザインについて、気になる事やメモ書き等を残していきます' }
            ]
        }
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
    padding: 5rem 2rem 4rem 3rem;
}

@include sp{
    .index{
        padding:0;
    }
};
</style>
