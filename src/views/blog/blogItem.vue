<template>
    <div class="blogItem">
        <h2>
            <a :href="blogContent.href" target="_blank">
                {{blogContent.title}}
                <svg class="icon">
                    <use xlink:href="#icon-feiji" />
                </svg>
            </a>
            
        </h2>
        <p class="keyWords">
            {{blogContent.keyWords}}            
        </p>
        <div class="link">
            <a :href="blogContent.href"  target="_blank">
                <svg class="icon">
                    <use xlink:href="#icon-duanjiantou" />
                </svg>
            </a>     
        </div>
    </div>
</template>
<script>
export default {
    props: [ "blogContent" ]
}
</script>
<style lang="stylus" scoped>
    .blogItem
        width 80%
        background-color rgba(0, 0, 0, 0.4)
        padding 20px 15px
        margin-bottom 20px
        h2 
            font-size 19px
            margin-bottom 6px
            a 
                color #fff
        .keyWords 
            font-size 12px
            color #ada5a5
            margin-bottom 10px
        .link 
            a 
                color #fff
</style>