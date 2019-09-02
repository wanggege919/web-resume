<template>
    <div class="introduce-container">
        <div class="introduce-wrapper">
             <div class="introduce">
                <h1>
                    <svg class="icon">
                        <use xlink:href="#icon-unie64d" />
                    </svg>
                    <span class="introduce-title">刘书旺</span>
                </h1>
                <hr>
                <dl class="introduce-list">
                    <dt>应聘职位</dt>
                    <dd>前端工程师</dd>
                    <dt>年龄</dt>
                    <dd>25</dd>
                    <dt>现住址</dt>
                    <dd>河南郑州</dd>
                    <dt>英语等级</dt>
                    <dd>CET-4</dd>
                    <dt>学校</dt>
                    <dd>本科 洛阳理工学院</dd>
                    <dt>专业</dt>
                    <dd>土木工程</dd>
                </dl>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .introduce-container
        position relative
        width 450px
        z-index 1
        &::after
            content " "
            width 100%
            height 100%
            border 10px solid #32895b
            position absolute 
            top 25px
            right -25px
            z-index -1
        .introduce-wrapper
            width 100%
            height 100%
            border 1px solid #fff
            padding 5px
            background #000
            .introduce
                width 100%
                background #353535
                color #fff
                padding 20px 100px
                h1
                    margin-top 20px
                    margin-bottom 5px
                    displsy flex 
                    span 
                        margin-left 12px
                hr
                    margin 20px 0
                dl
                    display flex
                    justify-content space-between
                    flex-wrap wrap 
                dt
                    width 38%
                    margin 5px 0
                    color rgb(157, 160, 167)
                    font-weight bold
                dd 
                    width 62%
                    margin 5px 0


@media screen and (max-width: 768px) {
  
  .introduce-container {
      .introduce-wrapper {
          .introduce {
                padding 20px
            }
      }     
  }
}
@media screen and (max-width: 500px) {
    .introduce-container {
        width 220px
        font-size 14px  
        .introduce-wrapper {
            .introduce {
                padding 10px
                h1 {
                    font-size 20px
                    margin-top 0px
                    margin-bottom 0px
                }
                hr {
                    margin 5px
                    transform: translateX(-4px)
                }
            }
        }   
    }
}
           
</style>