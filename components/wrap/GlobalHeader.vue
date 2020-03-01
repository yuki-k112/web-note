<template lang='pug'>
header.globalHeader
    dl.globalHeader_titleArea
        dt.globalHeader_logo WEB NOTE
        dd.globalHeader_lead  記録しておきたいことを色々書く

</template>

<script>
export default {
    name:'GlobalHeader',
}
</script>

<style lang='scss'>
.globalHeader{
    &_titleArea{
        padding:3rem 0 4rem;
        color: #fff;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-weight: 700;
    }
    &_logo{
        font-size: 3rem;
        position: relative;
        margin-right: 1.5rem;
        padding-right: 1.5rem;
        border-right: solid thin ;
        line-height: 1;
    }
    &_lead{
        font-size: $text-medium;
    }
}
</style>