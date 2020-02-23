<template lang='pug'>
main.index
    IndexCard(
        :title='items[0].title' 
        :date='items[0].data' 
        :alt='items[0].alt' 
        :img='items[0].mainImg'
        :category='items[0].category.title'
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
