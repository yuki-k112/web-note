<template lang="pug">
transition-group.cardList(
    appear 
    name='list-complete' 
    tag='ul'
)
    li.cardList_item(
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
import IndexCard from '~/components/module/IndexCard'

export default {
    name:'CardList',
    components:{
        IndexCard
    },
    props:{
        articleData:{
            type:Array,
            required:true
        }
    }
}
</script>
<style lang="scss">
.cardList{
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    &_item{
        margin:0 1rem 2rem;
        width: calc(33% - 2rem);
        max-width: 320px;
        min-width: 195px;
        .indexCard{
            width:100%;
            height: 100%;
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

@include sp{
    .cardList{
        flex-direction:column;
        &_item{
            width: 100%;
            margin: 0 0 2rem;
            max-width: 100%;
            min-width: 1px;
        }
    }
};
</style>