<template>
  <div class="portfolio">
    <div class="portfolio-title">
      <h1>Portfolio</h1>
    </div>
    <div class="content">
      <div class="portfolio-info one">
        <PortfolioTemplate title="Vue2.5 开发去哪儿网">
          <p slot='desc'>
            仿移动端去哪儿网，使用mock数据，支持根据不同城市选择不同景点的功能，首页多区域轮播，城市的展示搜索，城市左侧字母与右侧区块动画联动等等
          </p>
          <ul slot='info'>
            <li>使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6</li>
            <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
            <li>使用 axios + promise 异步请求</li>
            <li>使用 swiper + better-scroll + animate.css 插件</li>
            <li>使用 stylus 语法：嵌套，混入，函数等</li>
          </ul>
          <a class="one" href="https://github.com/wanggege919/travel-new" target="_blank">项目源码</a>
          <a class="two" href="https://wanggege919.github.io/travel-new/dist/index.html" target="_blank">项目预览</a>
        </PortfolioTemplate>
      </div>
      <div class="portfolio-info two">
        <PortfolioTemplate title="Vue.js搭建CNODE社区">
          <p slot='desc'>
            该项目是利用Vue.js以及CNODE社区API搭建的一个简易版CNODE社区
          </p>
          <ul slot='info'>
            <li>技术栈：vue + vue-cli + axios + vue-router + es6</li>
            <li>项目内容：包括文章列表页，文章详情页，作者页面等</li>
            <li>利用组件化开发，项目由Header,PostList,Artical,UserInfo,SlideBar,Pagination等组件组成</li>
            <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
          </ul>
          <a class="one" href="https://github.com/wanggege919/cnode">项目源码</a>
          <a class="two" href="https://wanggege919.github.io/cnode/dist/index.html">项目预览</a>
        </PortfolioTemplate>
      </div>
      <div class="portfolio-info three">
        <PortfolioTemplate title="Vue.js搭建音乐播放器">
          <p slot='desc'>
            该项目是利用Vue.js以及从QQ音乐的开放的接口抓来的数据完成的一款音乐播放器
          </p>
          <ul slot='info'>
            <li>使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6 + jsonp</li>
            <li>使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置</li>
            <li>使用 vuex 进行地址状态管理，支持增删改查</li>
            <li>使用 axios + promise 异步请求</li>
            <li>使用 组件化开发，整个项目由页面的基本组件，公用组件完成</li>
            <li>使用 swiper + better-scroll + animate.css 插件</li>
            <li>使用 stylus 语法：嵌套，混入，函数等</li>
          </ul>
          <a class="one" href="https://github.com/wanggege919/vue-music">项目源码</a>
          <a class="two" href="https://wanggege919.github.io/vue-music/dist/index.html">项目预览</a>
        </PortfolioTemplate>
      </div>
      <div class="portfolio-info four">
        <PortfolioTemplate title="文章电影小分享(小程序)">
          <p slot='desc'>
            该项目是通过 mock 数据中的文章音乐以及豆瓣接口抓取的电影资源组成的一个微信端小程序
          </p>
          <ul slot='info'>
            <li>熟悉了小程序的模板以及组件的使用</li>
            <li>学习了小程序内音乐播放前后台切换以及页面的显示和隐藏的同步</li>
          </ul>
          <a class="one" href="https://github.com/wanggege919/movieShareApplet">项目源码</a>
        </PortfolioTemplate>
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioTemplate from './works'
import $ from 'jquery'
export default {
  name: 'Portfolio',
  components: {
    PortfolioTemplate
  },
  data () {
    return {
    }
  },
  mounted () {
    this.init()
    this.initScroll()
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    init () {
      $('.portfolio-title').addClass('animated bounceInRight')
      $('.content .portfolio-info').first().css({opacity: 1}).addClass('animated bounceInUp')
      .nextAll('.portfolio-info').css({opacity: 0})
    },
    initScroll () {
      $('.container').on('scroll', (e) => {
        $('.content .portfolio-info').each((i, el)=>{
          if($(el).offset().top < $(el).height() / 1.2){
            this.page = i
            if($(el).css('opacity') == 0){
              $('.content .portfolio-info').eq(i).addClass('animated bounceInUp')
              .css('opacity',1).siblings().removeClass('animated bounceInUp')
            }
          }
        })
      })
    }
  }

}
</script>
<style lang="stylus" scoped>
  .portfolio
    .portfolio-title
      display inline-block
      border-bottom 5px solid #b5b519
      padding-bottom 14px
      font-weight bold
      color #fff 
    .content 
      display flex
      flex-direction column
      width 100%
      justify-content center
      align-items center
      padding 50px 0
      .portfolio-info
        width 80%
        margin-bottom 120px

@media screen and (max-width: 500px) {
  
}
        
</style>
