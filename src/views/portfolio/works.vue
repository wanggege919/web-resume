<template>
    <div class="works-template">
       <h2>{{title}}</h2> 
       <hr>
        <slot name="desc"></slot>
       <div class="info">
           <!-- <ul>
               <li></li>
           </ul> -->
           <slot name='info'></slot>
       </div>
       <div class="code-btn">
           <slot></slot>
       </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '项目名称'
        },
        desc: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="stylus" scoped>
    .works-template
        width 100%
        min-height 480px
        background-color rgba(0, 0, 0, 0.6)
        color #ffffff
        padding 90px 50px
        display flex
        flex-direction column
        justify-content center
        hr 
            width 80%
            height 2px
            border 1px solid rgba(212, 59, 51, 1)
            background-color rgba(212, 59, 51, 1)
            margin-top 10px
            margin-bottom 10px
        >p 
            font-size 14px
            color rgba(255, 255, 255, 0.5)
        .info 
            width 80%
            border 1px solid #fff
            padding 10px
            margin 10px
            ul 
                background-color rgba(255, 255, 255, 0.2)
                font-size 13px
                line-height 20px
                padding 10px
                li 
                    &::before 
                        content '*'
                        margin-right 7px
        .code-btn
            width 100%
            display flex
            justify-content flex-end
            a 
                padding 10px 20px
                background-color rgb(212, 59, 51)  
                color #fff 
                margin 10px 10px 0 10px
                font-size 14px        
</style>