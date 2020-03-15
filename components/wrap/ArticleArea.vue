<template lang="pug">
article.articleArea
    header.articleArea_header(
        :style='getBgImg'
    )
        h1.articleArea_title {{title}}
        .articleArea_dateArea
            time.articleArea_date 投稿日時:{{time}}
            time.articleArea_update(
                v-if='upDateTime'
            ) 更新日時:{{updataTime}}
        categoryLabel(
            :name = 'category'
        )
        dl.articleArea_tags
            dt.articleArea_tagTitle Tag:
            dd.articleArea_tag(
                v-for='item in tags'
            ) {{item.name}}

    section.articleArea_body(v-html='body')
</template>

<script>
export default {
    name:'ArticleArea',
    props:{
        title:{
            type:String,
        },
        body:{
            type:String,
        },
        time:{
            type:String
        },
        upDataTime:{
            type:String
        },
        category:{
            type:String,
        },
        tags:{
            type:Array,
        },
        headerImg:{
            type:Object,
        },
    },
    computed:{
        getBgImg:function(){
            return 'background-img:url("' + this.headerImg.src + '")'
        },
    },
}
</script>
<style lang="scss">
.articleArea{
    border-radius: 10px;
    background-color: #fff;
    box-shadow: $shadow-04;
    &_header{
        padding-top: 6rem;
        background-size: 100% 6rem;
        background-position: top left;
        display: flex;
        flex-direction: column;
    }
    &_title{
        font-size: $text-large;
        font-weight: 700;
        order: 1;
        margin-top: 1rem;
    }
    &_dateArea{
        order: 0;
        display: flex;
        font-size: $text-smaller;
        color: $color-text-sub;
    }
    &_upDateTime{
        margin-left: 1rem;
    }
    &_tags{
        display: flex;
        font-size: $text-small;
        color: $color-text-sub;
    }
    &_tagTitle{
        font-weight: 700;
    }
    &_tag{
        margin-left: 0.5rem;
        display: inline-block;
        &::after{
            content: '/';
            margin:0 0.5rem;
            display: inline-block;
        }
        &:last-of-type::after{
            content: none;
        }
    }
    &_body{
        margin-top: 3rem;
    }
}

</style>