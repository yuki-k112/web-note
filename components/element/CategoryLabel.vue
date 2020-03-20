<template lang='pug'>
nuxt-link(:to='url')
    p.categoryLabel {{name}}
</template>
<script>
export default {
    name:'CategoryLabel',
    props:{
        name:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
        // class:{
        //     type:String,
        //     required:true,
        //     default:'etc',
        //     validator (val) {
        //         $isHarfWidthCharacters(val);
        //     },
        // }
    },
}
</script>
<style lang='scss' scoped>
.categoryLabel{
    display: inline-block;
    font-size: $text-small;
    padding: 0.25em 1em;
    background-color: rgb(55, 190, 214);
    color: #fff;
    font-weight: 700;
    border: solid thin #fff;
    text-decoration: none;
    transition: .4s;
    &.javaScript{
        background-color: rgb(221, 142, 142);
    }
    &.develop{
        background-color: rgb(204, 185, 102);
    }
    &:hover{
        transform: scale(1.1);
        transition: .15s;
    }
}
</style>