<template>
    <div class="picture-container">       
        <div class="pic">
            <img src="./书旺.jpg" alt="书旺">
        </div>                  
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .picture-container
        position relative
        width 200px
        height 200px
        z-index 1
        &::after  // 在.picture-container元素的内部结束的位置创建一个元素
            content " "
            width 100%
            height 100%
            border 10px solid yellow
            position absolute
            left -25px
            top 25px
            z-index -1
        .pic
            width 100%
            height 100%
            border 1px solid white
            
            img 
                width 100%
                height 100%
                padding 5px
                background #000
@media screen and (max-width: 500px) {
    .picture-container {
        width 120px
        height 120px       
    }       
}
</style>