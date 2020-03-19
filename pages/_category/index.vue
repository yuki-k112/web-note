<template lang='pug'>
main.index
    .index_header
        h1.index_title TEST
        p.index_lead test

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
</style>
