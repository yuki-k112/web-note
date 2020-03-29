<template lang="pug">
article.articleArea
    header.articleArea_header
        span.articleArea_img(
            :style='getBgImg'
        )
        h1.articleArea_title {{title}}
        .articleArea_dateArea
            time.articleArea_date 投稿日:{{date}}
            time.articleArea_update(
                v-if='updataDate'
            ) 更新日:{{updataDate}}
        dl.articleArea_tags
            dt.articleArea_tagTitle Tag:
            dd.articleArea_tag(
                v-for='item in tags'
            ) {{item.tag}}
        categoryLabel(
            :name='category' 
            :url='setCategoryLink',
        )

    section.articleArea_body(v-html='body')
</template>

<script>
import CategoryLabel from '~/components/element/CategoryLabel'

export default {
    name:'ArticleArea',
    components:{
        CategoryLabel,
    },
    props:{
        title:{
            type:String,
        },
        body:{
            type:String,
        },
        date:{
            type:String
        },
        updataDate:{
            type:String
        },
        category:{
            type:String,
        },
        categoryPath:{
            type:String,
        },
        tags:{
            type:Array,
        },
        img:{
            type:String,
        },
    },
    computed:{
        getBgImg:function(){
            return 'background-image:url("' + this.img + '")'
        },
        setCategoryLink:function(){
            return `/${this.categoryPath}/`
        }
    },
}
</script>
<style lang="scss">
.articleArea{
    border-radius: 10px;
    background-color: #fff;
    box-shadow: $shadow-04;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    padding: 0 3.5rem 4.5rem;
    position:relative;
    &_header{
        display:flex;
        flex-direction:column;
    }
    &_img{
        width: 100vw;
        height: calc(10rem + 11vw);
        position: relative;
        left: 50%;
        transform:translateX(-50%);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    &_title{
        font-size: $text-larger;
        font-weight: 700;
        margin-top: 3.5rem;
    }
    &_dateArea{
        display: flex;
        font-size: $text-smaller;
        color: $color-text-sub;
        margin-top:1.5rem;
    }
    &_update{
        margin-left: 0.75rem;
        &::before{
            content:'/';
            margin-right:0.75rem;
        }
    }
    &_tags{
        display: flex;
        font-size: $text-small;
        color: $color-text-sub;
        margin-top:0.5rem;
    }
    &_tagTitle{
        font-weight: 400;
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
        margin-top: 4rem;
        h2{
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            position: relative;
            font-size: 26px;
            color: $color-main;
        }
        p+h2{
            margin-top: 3rem;
        }
        p{
            line-height: 1.8;
            font-size: 15px;
        }
        code{
            display: block;
            padding: 1.5rem;
            background-color: #f5f5f5;
            border-radius: 10px;
            color: #1e3977;
        }
    }
    .categoryLabel{
        position:absolute;
        top:1.25rem;
        left:1.25rem;
        font-size:$text-medium;
    }
}

@include sp{
    .articleArea{
        padding:0 1rem 2.5rem;
        margin-bottom: 3rem;
        &_title{
            margin-top: 1.5rem;
            font-size: 20px;
        }
        &_tags{
            margin-top: 0;
        }
        &_body{
            margin-top: 2rem;
            h2{
                justify-content: center;
                font-size: 18px;
                margin-bottom: 1rem;
            }
            p{
                font-size: 14px;
            }
            pre{
                width: 100%;
                background: #f5f5f5;
                display: block;
                padding: 0.5rem;
            }
        }
    }
};

</style>