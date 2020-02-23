<template lang='pug'>
.indexCard(:class='indexClass')
    h2.indexCard_title {{title}}
    img.indexCard_img(
        :src='img.url' 
        :alt='alt'
    )
    time.indexCard_date {{date}}
    categoryLabel(
        :class='indexClass',
        :url='linkUrl',
        :name='category'
    ) {{category}}
</template>
<script>
import CategoryLabel from '~/components/element/CategoryLabel';
export default {
    name:'IndexCard',
    components:{
        CategoryLabel,
    },
    props:{
        title:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        linkUrl:{
            type:String,
            required:true,
        },
        indexClass:{
            type:String,
        },
        img:{
            type:Object,
            required:true,
        },
        alt:{
            type:String,
        },
        category:{
            type:String,
        }
    },
}
</script>
<style lang='scss'>
.indexCard{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 380px;
    &_title{
        order: 3;
        font-size: $text-medium;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }
    &_img{
        order: 1;
        margin-bottom: 1rem;
        width: 100%;
        height: auto;
    }
    &_date{
        font-size: $text-smaller;
        color: $color-text-sub;
        order: 2;
    }
    .categoryLabel{
        position: absolute;
        top:0.5rem;
        left: 0.5rem;
    }
    &:hover{
        background-color: #eee;
        transition: .3s;
    }
}
</style>