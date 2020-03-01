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
        li.index_card(
            v-for='item in items' 
            :key="item.id"
        )
            IndexCard(
                :title='item.title' 
                :date='item.date' 
                :alt='item.alt' 
                :img='item.mainImg'
                :category='item.category.title'
                :linkUrl='testUrl'
            )
</template>

<script>
import axios from "axios";
import CategoryLabel from "~/components/element/CategoryLabel";
import IndexCard from "~/components/module/IndexCard";

export default {
  components: {
    CategoryLabel,
    IndexCard
  },
  data:function(){
      return {
          testUrl:'/'
      }
  },
  async asyncData({ app, error }) {
   const { data } = await axios.get(
      "https://web-note.microcms.io/api/v1/article",
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );
    return {
      items: data.contents
    };
  },
}

</script>

<style lang='scss'>
.index{
    padding-left: 2rem;
    &_header{
        display: block;
        color: #fff;
        margin-bottom: 2rem;
        position: relative;
        padding-left: 2rem;
        &::before{
            content: '';
            border-top: solid 0.75rem #fff;
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
        padding:2rem 0.5rem;
    }
    &_card{
        width: calc(33% - 3rem);
        max-width: 320px;
        min-width: 195px;
        margin:0 1.5rem 1.5rem;
        @media only screen and (max-width:1060px) {
           width: calc(50% - 3rem);
        }
        @media only screen and (max-width:810px) {
           width: 100%;
           max-width: 100%;
           .indexCard{
               max-width: 100%;
           }
        }

    }
}
</style>
