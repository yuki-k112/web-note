<template lang='pug'>
.indexCard(:class='indexClass')
    nuxt-link.indexCard_inner(to='/')
        h2.indexCard_title {{title}}
        figure.indexCard_img-wrap
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
    max-width: 380px;
    position: relative;
    border-radius: 0.75rem;
    transition: .5s;
    &_inner{
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    &_title{
        order: 3;
        font-size: $text-medium;
        font-weight: 700;
        margin-bottom: 0.75rem;
        padding-left: 0.25rem;
    }
    &_img{
        order: 1;
        border-radius: 0.75rem;
        width: 100%;
        height: 100%;
        transition: .4s;
        vertical-align: bottom;
        &-wrap{
            overflow: hidden;
            border-radius: 0.75rem;
            width: 100%;
            margin-bottom: 1rem;
        }
    }
    &_date{
        font-size: $text-smaller;
        color: $color-text-sub;
        order: 2;
        padding-left: 0.25rem;
    }
    .categoryLabel{
        position: absolute;
        top:0.5rem;
        left: 0.5rem;
    }
    &:hover {
        transition: .25s;
        box-shadow: $shadow-02;
    }
    &:hover .indexCard_img{
        transform: scale(1.2);
        transition: .25s;
    }
}
</style>