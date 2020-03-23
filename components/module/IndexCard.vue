<template lang='pug'>
section.indexCard(:class='indexClass' )
    categoryLabel(
        :class='indexClass',
        :url='setCategoryLink',
        :name='category' 
    ) {{category}}
    .indexCard_inner(@click='toLinkPage')
        .indexCard_infoArea
            h2.indexCard_title 
                nuxt-link(
                    :to='setLink'
                ) {{title}}
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
        id:{
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
        categoryPath:{
            type:String,
        },
        tags:{
            type:Array,
        }
    },
    computed:{
        setLink:function(){
          return `/${this.categoryPath}/${this.id}/`
        },
        setCategoryLink:function(){
          return `/${this.categoryPath}/`
        }

    },
    methods:{
        toLinkPage:function(event){
            this.$router.push({ path: this.setLink })
        },
    }
}
</script>
<style lang='scss'>
.indexCard{
    position: relative;
    border-radius: 0.75rem;
    transition: .5s;
    box-shadow: $shadow-03;
    border-radius: 10px;
    overflow:hidden;
    &:hover{
        cursor:pointer;
        transition: .25s;
        box-shadow: $shadow-05;
    }
    &_infoArea{
        order: 1;
        padding: 0 1.5rem 2rem;
        display: flex;
        flex-direction: column;
    }
    &_inner{
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    &_title{
        font-size: 15px;
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
        width: 100%;
        transition: .4s;
        vertical-align: bottom;
        &-wrap{
            overflow: hidden;
            width: 100%;
            height: 11vw;
            margin-bottom: 1.5rem;
        }
    }
    &_date{
        font-size: $text-smaller;
        color: $color-text-sub;
        order: 0;
    }
    &:hover .indexCard_img{
        transform: scale(1.2);
        transition: .25s;
    }
    .categoryLabel{
        position: absolute;
        top:0.75rem;
        left: 0.75rem;
        z-index:99999;
    }
}

@include sp{
    .indexCard{
        &_img-wrap{
            height: 11rem;
        }
    }
};
</style>