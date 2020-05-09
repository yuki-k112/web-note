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
                    <transition appear name='slideInBtm'>
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
    display:flex;
    align-items: center;
    color:$color-main;
    margin-bottom: 3rem;
    position: relative;
    padding-left: 1.5rem;
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
        font-size: 2.5rem;
    }
    &_lead{
        margin: 0.5rem 0 0 1rem;
        line-height: 2.5rem;
    }
    &.slideInBtm-enter-active, .slideInBtm-leave-active{
        transition-delay: 0.2s;
    }
    .sectionTitle_lead.slideInBtm-enter-active, .sectionTitle_lead.slideInBtm-leave-active{
        transition-delay: 0.3s;
    }
}
@media only screen and (max-width: 768px) {
    .sectionTitle{
        padding-left: 0;
        text-align: center;
        margin-bottom:1.25rem;
        justify-content: center;
        &::before{
            content:none;
        }
        &_title{
            font-size: 1.5rem;
        }
    }
}
</style>