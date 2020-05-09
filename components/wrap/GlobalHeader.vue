<template lang='pug'>
header.globalHeader
    nuxt-link(to='/')
        dl.globalHeader_titleArea
            dt.globalHeader_logo WEB NOTE
            dd.globalHeader_lead  フロントエンドやデザインについて色々書く場所


</template>

<script>
export default {
    name:'GlobalHeader',
}
</script>

<style lang='scss'>
.globalHeader{
    padding: 1rem;
    // background-color: #298a8a;
    background-color:$color-main;
    border-bottom: solid 3px #fff;
    &_titleArea{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-weight: 700;
        color: #fff;
    }
    &_logo{
        font-size: 2.5rem;
        position: relative;
        line-height: 1.2;
    }
    &_lead{
        margin-top: 0.5rem;
        line-height: 1.7;
        font-size: $text-small;
    }
}
@include sp{
    .globalHeader{
        background-color: #ffffff;
        &_titleArea{
            display: block;
        }
        &_lead{
            font-weight: 400;
            margin-top: 0.25rem;
            color: $color-main;
            padding-left: 0.75rem;
        }
        &_logo{
            background-color: $color-main;
            font-size: 24px;
            padding: 0.8rem;
        }
    }
};
</style>