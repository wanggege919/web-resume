<template>
  <div class="person-wrapper">
    <div class="section1">
        <div class="person">
          <div class="picture-wrapper animated bounceInLeft">
            <Picture></Picture>
          </div>
          <div class="introduce-wrapper animated bounceInRight">
            <Introduce></Introduce>
          </div> 
        </div>                   
    </div>
    <div class="section2">
      <div class="section2-title">
        <h1>Experience</h1>
        <div class="horizon"></div>
      </div>
      <div class="experience-wrapper">
        <div class="learning-experience">
          <Experience>
            <svg class="icons" width="50px" height="50px" fill="currentColor">
              <use xlink:href="#icon-xueshimao1" />
            </svg>
            <h1>Learning experience</h1>
            <p class="learning-content">
              自学前端开发，学习资源是视频课程，相关书籍以及MDN,从基本的静态页面到响应式页面，熟练弹性布局及移动端页面开发，熟练Vue技术栈，熟悉工程化，模块化，组件化开发，有小程序、移动端开发经验。
            </p>   
          </Experience>
        </div>
        
        <div class="working-experience">
          <Experience background="#bd933e">
            <svg class="icons" width="50px" height="50px" fill="currentColor">
              <use xlink:href="#icon-gongzuo" />
            </svg>
            <h1>Working experience</h1>
            <p>
              <b>公司名称：</b>苏州乐精灵信息科技有限公司<br>
              <b>工作内容：</b>使用Vue + element-ui重构公司的PC端项目，期间也使用 Vue 做了一些移动端业务以及小程序业务。<br>
              <b>技术栈：</b>Vue + Element-ui + Webpack + 移动端 + 小程序
            </p>   
          </Experience>
        </div>
        
      </div>      
    </div>
  </div>
</template>
<script>
import Picture from './components/picture'
import Introduce from './components/introduce'
import Experience from './components/experience'
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
export default {
  components: {
    Picture,
    Introduce,
    Experience
  },
  mounted () {
    this.initScroll()
    // console.log($('#app .container'))
    // VanillaTilt.init($('.picture-wrapper'))
    if($(window).width() > 500){
      this.initVanillaTilt()
    }
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    initScroll () {
      $('#app .container').on('scroll', e => {
        // console.log($(e.currentTarget).scrollTop())
        if($(e.currentTarget).scrollTop() > 0){
          $('.section2 .section2-title').addClass('animated bounceInRight').show()
        }
        if($(e.currentTarget).scrollTop() > $('.section2-title').height()){
          $('.learning-experience').addClass('animated bounceInLeft').show()
          $('.working-experience').addClass('animated bounceInRight').show()
        }
      })
    },
    initVanillaTilt () {
      VanillaTilt.init(document.querySelector('.picture-container'), {
        max: 25,
        speed: 400
      })
      VanillaTilt.init(document.querySelector('.introduce-container'), {
        max: 25,
        speed: 400
      })
       VanillaTilt.init(document.querySelectorAll('.person-experience'), {
        max: 25,
        speed: 400
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

.person-wrapper 
  width 100%
  .section1
    padding 10% 15%
    .person
      width 100%
      position relative
      display flex
      justify-content space-between
      flex-wrap: wrap
      // .picture-wrapper
      //   position relative 
      //   top 0
      //   left 0
      .introduce-wrapper
        margin-top 100px
  .section2
    padding 45px 45px 200px 45px
    .section2-title
      h1 
        // font-weight 700
        color #fff
      .horizon
        height 4px
        width 160px
        background #b5b519
        margin-top 10px
        margin-bottom 60px
    .experience-wrapper
      display flex
      justify-content space-around
      flex-wrap wrap
      .person-experience
        h1 
          margin-bottom 16px
          margin-top 5px
        p.learning-content 
          line-height 30px
@media screen and (max-width: 500px) {
  .person-wrapper {
    .section1 {
      padding 0 
      .person {
        .picture-wrapper {
          margin-bottom 25px
        }
        .introduce-wrapper {
          margin-top 0
        }
      }     
    }
    .section2 {
      padding 45px 0
      .section2-title {
        h1 {
          font-size 20px
        }
        .horizon {
          width 100px
          margin-bottom 20px
        }
      }
      .experience-wrapper {
        .person-experience {
          h1 {
            font-size 18px
          }
          .icons {
            width 30px
            height 30px
          }
          p {
            font-size 15px
          }
        }
        
      }
    }
  }
  
}
</style>
