<template>
    <div class="contactItem">
        <div class="contact-wrapper">
            <div class="icon-wrapper">
               <svg class="icon">
                    <use :xlink:href="contactContent.icon" />
                </svg> 
            </div>
            <div class="textOrLink">
                <p v-if="!contactContent.href">{{contactContent.title}}</p>
                <a v-else :href="contactContent.href">{{contactContent.title}}</a>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    props: [ 'contactContent' ]
}
</script>
<style lang="stylus" scoped>
    .contactItem
        padding 20px
        margin 5px 14px
        background-color rgba(255, 255, 255, 0.3)
        border-radius 50%
        .contact-wrapper 
            width 100%
            height 100%
            padding 10px
            display flex
            flex-direction column
            justify-content center
            align-items center
            font-size 12px
            .icon-wrapper .icon 
                width 40px 
                height 40px
            .textOrLink a 
                color #fdfdfd
                text-decoration underline
            
</style>