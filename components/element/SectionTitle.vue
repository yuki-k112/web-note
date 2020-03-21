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
            <div class='sectionTitle'>
                <Level class='sectionTitle_title'>{this.title}</Level>
                <ShowLeadText />
            </div>
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
    &::before{
        content: '';
        border-top: solid 0.75rem $color-main;
        border-left: solid 0.5rem transparent;
        border-right: solid 0.5rem transparent;
        display: block;
        position: absolute;
        left: 0;
        top: 1.25em;
    }
    &_title{
        font-size: $text-larger;
    }
}
@media only screen and (max-width: 768px) {
}
</style>