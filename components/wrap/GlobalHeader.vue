<template lang='pug'>
header.globalHeader
    a(href='/')
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
    background-color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    &_titleArea{
        color: $color-main;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-weight: 700;
    }
    &_logo{
        font-size: 2.75rem;
        position: relative;
        line-height: 1.2;
    }
    &_lead{
        margin-top: 1rem;
    }
}
</style>