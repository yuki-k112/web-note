<script>
export default {
    name:'SectionTitle',
    render(h){
        const Level = `h${this.level}`;
        const ShowLeadText = () => {
            if(!this.lead) { return };
            return (<p class='sectionTitle_lead'>{this.lead}</p>)
        }
        return (
            <transition appear name='slideInBtm'>
                <div class='sectionTitle'>
                    <Level class='sectionTitle_title'>{this.title}</Level>
                    <transition appear name='slideInRight'>
                        <ShowLeadText />
                    </transition>
                </div>
            </transition>
        )
    },
    props:{
        level:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        lead:{
            type:String,
        }
    },
}
</script>
<style scoped lang="scss">
.sectionTitle{
    display: block;
    color:$color-main;
    margin-bottom: 2rem;
    position: relative;
    padding-left: 2rem;
    // &::before{
    //     content: '';
    //     border-top: solid 0.75rem $color-main;
    //     border-left: solid 0.5rem transparent;
    //     border-right: solid 0.5rem transparent;
    //     display: block;
    //     position: absolute;
    //     left: 0;
    //     top: 1.25em;
    // }
    &_title{
        font-size: 3rem;
    }
    &.slideInBtm-enter-active, .slideInBtm-leave-active{
        transition-delay: 0.2s;
    }
    .slideInRight-enter-active, .slideInRight-leave-active{
        transition-delay: 0.45s;
    }
}
@media only screen and (max-width: 768px) {
    .sectionTitle{
        padding-left: 0;
        text-align: center;
        margin-bottom:1.25rem;
        &::before{
            content:none;
        }
        &_title{
            font-size: 1.5rem;
        }
    }
}
</style>