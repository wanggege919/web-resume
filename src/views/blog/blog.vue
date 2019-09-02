<template>
  <div class="blog">
    <div class="blog-title animated bounceInRight">
      <h1>Blog</h1>
    </div>
    <div class="content animated bounceInUp">
      <BlogItem v-for="item in blogList" :key="item.id" :blogContent="item"></BlogItem>
    </div>
  </div>
</template>
<script>
import BlogItem from './blogItem'
import VanillaTilt from 'vanilla-tilt'
import $ from 'jquery'
export default {
  components: {
    BlogItem
  },
  data () {
    return {
      blogList: [
        {
          title: 'Vue.js学习总结',
          keyWords: '关键词：Vue指令 Vue组件 生命周期 Vue动画 Vue-router Vuex',
          href: 'https://www.jianshu.com/p/153e30559c8a',
          id: '0001'
        },
        {
          title: '学会正则表达式',
          keyWords: '关键词：修饰符 元字符 前瞻 常用属性、方法',
          href: 'https://www.jianshu.com/p/f7e56e3b2f73',
          id: '0002'
        },
        {
          title: '数组与伪数组(jQuery初探)',
          keyWords: '关键词：arguments 数组与伪数组对比',
          href: 'https://www.jianshu.com/p/1eee289337d7',
          id: '0003'
        },
        {
          title: 'html和css概括总结',
          keyWords: '关键词：html常见元素的理解 css非布局样式 css布局 css动画',
          href: 'https://www.jianshu.com/p/cc0300067462',
          id: '0004'
        },
        {
          title: '了解一些常见的排序算法',
          keyWords: '关键词：冒泡排序 选择排序 计数排序 桶排序',
          href: 'https://www.jianshu.com/p/b52861616919',
          id: '0005'
        }
      ]
    }
  },
  mounted () {
    if($(window).width() > 500){
      this.initVanillaTilt()
    }
  },
  methods: {
    initVanillaTilt () {
      VanillaTilt.init(document.querySelectorAll('.blogItem'), {
        max: 0,
        speed: 400,
        scale: 1.05
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .blog
    color #fff
    .blog-title
      display inline-block
      border-bottom 5px solid #b5b519
      padding-bottom 14px
      font-weight bold
      color #fff 
    .content 
      display flex
      flex-direction column
      align-items center
      padding 20px
</style>