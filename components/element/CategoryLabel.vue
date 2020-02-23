<template lang='pug'>
nuxt-link.categoryLabel(
    :to='url' 
    ) {{name}}
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
    &.javaScript{
        background-color: rgb(221, 142, 142);
    }
    &.develop{
        background-color: rgb(204, 185, 102);
    }
}
</style>