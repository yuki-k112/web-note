<script>
export default {
    name:'SectionTitle',
    render(h){
        const Lebel = `h${this.lebel}`;
        const ShowLeadText = () => {
            if(!this.lead) { return };
            return (<p class='sectionTitle_lead'>{this.lead}</p>)
        }
        return (
            <div class='sectionTitle'>
                <Lebel class='sectionTitle_title'>{this.title}</Lebel>
                <ShowLeadText />
            </div>
        )
    },
    props:{
        lebel:{
            type:Number,
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
    color: #fff;
    margin-bottom: 2rem;
    position: relative;
    padding-left: 2rem;
    &::before{
        content: '';
        border-top: solid 0.75rem #fff;
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