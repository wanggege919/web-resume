<template>
  <div class="skill">
    <div class="skill-title animated bounceInRight">
      <h1>Technology stack</h1>
    </div>
    <ul class="flex list-wrapper">
      <li class="odd">
        <ListItem title="01" background="rgba(255, 255, 255, 0.3)">
          <ul>
            <li>熟练 HTML,了解语义化标签，熟练DOM事件</li>
            <li>熟练 CSS 核心概念，盒模型，文档流，浮动，定位，BFC，各种居中</li>
            <li>熟练 flex 弹性布局，移动端配置</li>
          </ul>
        </ListItem>
      </li>
      <li class="even">
        <ListItem title="02">
          <ul>
            <li>1. 熟练 JavaScript 及 常用ES6语法</li>
            <li>2. 了解原型，闭包，this</li>
            <li>3. 熟练 web存储，熟练异步操作Ajax，promise，Await/Async</li>
            <li>4. 熟练常用正则表达式</li>
          </ul>
        </ListItem>
      </li>
      <li class="odd">
        <ListItem title="03" background="rgba(255, 255, 255, 0.3)">
          <ul>
            <li>熟练 JQuery，Bootstrap</li>
            <li>熟练 Sass 嵌套，函数，mixin</li>
            <li>熟悉 同源协议，跨域，Jsonp</li>
          </ul>
        </ListItem>
      </li>
      <li class="even">
        <ListItem title="04">
          <ul>
            <li>熟练 VueJs 语法，了解生命周期，指令，计算属性等</li>
            <li>熟练 Vue-router 路由配置，Vuex 状态管理</li>
            <li>了解 MVC MVVM 开发模式，代码层面向模块化组件化靠近</li>
          </ul>
        </ListItem>
      </li>
      <li class="odd">
        <ListItem title="05" background="rgba(255, 255, 255, 0.3)">
          <ul>
            <li>熟悉 HTTP 协议</li>
            <li>使用过 Gulp，Webpack 基本配置，用过 Parcel</li>
            <li>熟练小程序基本语法及云开发，有项目经验</li>
            <li>热爱前端，对新技术无限好奇，喜欢写博客</li>
          </ul>
        </ListItem>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from 'jquery'
import ListItem from './listItem'
import VanillaTilt from 'vanilla-tilt'
export default {
  name: 'Skill',
  components: {
    ListItem
  },
  mounted () {
    if($(window).width() > 500){
      this.toggleClass()
      this.initVanillaTilt()
    } else {
      this.init()
      this.initScroll()
    }
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    toggleClass () {
      $('.list-wrapper > li.even').addClass('animated bounceInUp')
      $('.list-wrapper > li.odd').addClass('animated bounceInDown')
    },
    init () {
      $('.list-wrapper > li').first().addClass('scale')
    },
    initScroll () {
      $('#app .container').on('scroll', e => {
        $('.list-wrapper > li').each(function (i, el) {
          if (
            $(el).offset().top <= 320 &&
            $(el).offset().top + $(el).height() <= 595
          ) {
            $(el)
              .addClass("scale")
              .siblings()
              .removeClass("scale");
          }
        })
      })
    },
    initVanillaTilt () {
      VanillaTilt.init(document.querySelectorAll('.list-item'), {
        max: 25,
        speed: 400,
        scale: 1.1
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.skill
  color #fff
  padding 50px 40px
  .skill-title
    display inline-block
    border-bottom 5px solid #b5b519
    padding-bottom 14px
    font-weight bold
    color #fff
    margin-bottom 100px
  .list-wrapper
    justify-content space-around
    flex-wrap wrap
    >li 
      margin-bottom 20px
@media screen and (max-width: 500px) {
  .skill {
    .skill-title {
      display none
    }
    .list-wrapper {
      flex-direction column
      align-items center
      margin-bottom 220px
      // margin 58px
      >li {
        transform: scale(1)
        transition: transform 0.5s
        &.scale {
          transform: scale(1.2)
        }
      }
    }
  }
}
</style>
