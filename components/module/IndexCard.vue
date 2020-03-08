<template lang='pug'>
.indexCard(:class='indexClass')
    .indexCard_inner
        .indexCard_infoArea
            h2.indexCard_title {{title}}
                nuxt-link(
                    to='/'
                )
            time.indexCard_date {{date}}
            ul.indexCard_tagList
                li.indexCard_tag(
                    v-for='item in tags'
                ) 
                    a.indexCard_tagLink {{item.tag}}
        figure.indexCard_img-wrap
                img.indexCard_img(
                    :src='img.url' 
                    :alt='alt'
                )
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
        },
        tags:{
            type:Array,
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
    &_infoArea{
        order: 1;
        padding-left: 0.25rem;
        display: flex;
        flex-direction: column;
    }
    &_inner{
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    &_title{
        font-size: $text-medium;
        font-weight: 700;
        margin-bottom: 0.25rem;
        order: 1;
    }
    &_tagList{
        font-size: $text-smaller;
        order: 2;
        flex-wrap: wrap;
    }
    &_tag{
        color: $color-text-sub;
        display: inline-block;
        &+&::before{
            content: '/';
            display: inline-block;
            margin: 0 0.5rem;
        }
    }
    &_tagLink{
        color: $color-text-sub;
    }
    &_img{
        order: 0;
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
        order: 0;
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