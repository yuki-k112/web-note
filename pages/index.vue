<template lang='pug'>
main.index
    .index_header
        h1.index_title New Arrival
        p.index_lead 新着記事一覧

    transition-group.index_cardList(
        appear 
        name='list-complete' 
        tag='ul'
    )
        li.index_cardArea(
            v-for='item in articleData' 
            :key="item.id"
        )
            IndexCard(
                :title='item.title' 
                :date='item.date' 
                :alt='item.alt' 
                :img='item.mainImg'
                :category='item.category.title'
                :categoryPath='item.category.path'
                :id='item.id'
                :tags='item.tag'
            )
</template>

<script>
import axios from "axios";
import CategoryLabel from "~/components/element/CategoryLabel";
import IndexCard from "~/components/module/IndexCard";

export default {
  components: {
    CategoryLabel,
    IndexCard,
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
    &_cardList{
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        max-width: 1200px;
        box-shadow: $shadow-04;
        padding:3rem 0.5rem;
        border-radius: 10px;
    }
    &_cardArea{
        margin:0 2rem 3rem;
        width: calc(33% - 4rem);
        max-width: 320px;
        min-width: 195px;
        .indexCard{
            width:100%;
            // @media only screen and (max-width:1060px) {
            //     width: calc(50% - 3rem);
            // }
            @media only screen and (max-width:810px) {
                width: 100%;
                max-width: 100%;
            }
        }
    }
}
</style>
