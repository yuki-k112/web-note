<template lang="pug">
article.articleArea(:style='getBgImg')
    .articleArea_inner
        header.articleArea_header
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
    margin: auto;
    overflow: hidden;
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    &_inner{
        background-color:#F6F9FA;
        padding: 0 3.5rem 4.5rem 7rem;
        position:relative;
        margin-top: calc(12rem + 11vw);
    }
    &_header{
        display:flex;
        flex-direction:column;
    }
    &_img{
        width: 100vw;
    }
    &_title{
        font-size:34px;
        font-weight: 700;
        margin-top: 5rem;
    }
    &_dateArea{
        display: flex;
        font-size: $text-smaller;
        color: $color-text-sub;
        margin-top:0.5rem;
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
        margin-top:0.25rem;
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
        margin-top: 5rem;
        h2{
            margin-bottom: 0.4rem;
            padding-bottom: 0.4rem;
            border-bottom: 1px dotted #a9a9a9;
            display: flex;
            align-items: center;
            position: relative;
            font-size: 22px;
        }
        p+h2{
            margin-top: 3rem;
        }
        p{
            line-height: 1.8;
            font-size: 15px;
            max-width: 55rem;
        }
        code{
            display: block;
            padding: 1.5rem;
            background-color: #303030;
            color: #fff;
            margin-top: 1rem;
            border-radius: 5px;
        }
    }
    .categoryLabel{
        position:absolute;
        top:-1rem;
        padding: 0.25rem 2rem;
        left:4.5rem;
        font-size:$text-large;
    }
}

@include sp{
    .articleArea{
        padding:0;
        margin-bottom: 3rem;
        background-size: auto calc(200px + 95px);
        background-position:center top;
        &_inner{
            margin-top:185px;
            padding:0 0.25rem;
        }
        &_title{
            margin-top: 1.5rem;
            font-size: 18px;
        }
        &_tags{
            margin-top: 0;
        }
        &_body{
            margin-top: 2rem;
            h2{
                font-size: 16px;
                margin-bottom: 0.75rem;
            }
            p{
                font-size: 14px;
            }
            p+h2{
                margin-top: 2rem;
            }
            pre{
                width: 100%;
                background: #f5f5f5;
                display: block;
                padding: 0rem;
                margin-top:0.75rem;
            }
            code{
                margin-top:0;
                font-size:$text-smaller;
                overflow-x:scroll;
            }
        }
        .categoryLabel{
            font-size: 12px;
            left:1.0rem;
            padding:0.25rem 0.75rem;
        }
    }
};

</style>