<template>
    <div class="list-item" :style="{ background }">
        <div class="item-wrapper">
            <h1>{{title}}</h1>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '序号'
        },
        background: {
            type: String,
            default: 'rgba(5, 146, 92, 0.986)'
        }
    }
}
</script>
<style lang="stylus" scoped>
    .list-item
        width 190px
        min-height 275px
        padding 10px
        font-size 14px
        h1 
            color rgba(255, 255, 255, 0.3)
        ul 
            li 
                margin 15px 0
</style>