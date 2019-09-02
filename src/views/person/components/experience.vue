<template>
    <div class="person-experience" :style="{ background }">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Experience Title'
        },
        background: {
            type: String,
            default: '#328a5d'
        },

    }
}
</script>
<style lang="stylus" scoped>
    .person-experience
        width 440px
        color #fff
        height 330px
        padding 30px 24px
@media screen and (max-width: 500px) {
    .person-experience {
        display flex
        flex-direction column
        width 100%
        height 250px
        padding 15px 10px
    }

}
</style>