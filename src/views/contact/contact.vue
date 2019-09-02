<template>
  <div class="contact">
    <div class="contact-title animated bounceInRight">
      <h1>Contact</h1>
    </div>
    <div class="content flex-wrap animated bounceInUp">
      <ContactItem v-for="item in contactList" :key="item.id" :contactContent="item"></ContactItem>
    </div>
  </div>
</template>
<script>
import ContactItem from './contactItem'
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
export default {
  components: {
    ContactItem
  },
  data () {
    return {
      contactList: [
        {
          title: '18848956986',
          icon: '#icon-icon_voipphone',
          id: '0001'
        },
        {
          title: '活在当下',
          icon: '#icon-icon_wechat',
          href: 'https://i.loli.net/2019/08/09/qirdQAxPE3fTkBc.jpg',
          id: '0002'
        },
        {
          title: '1914161290@qq.com',
          icon: '#icon-youxiang',
          id: '0003'
        },
        {
          title: '在路上919',
          icon: '#icon-weibiaoti-',
          href: 'https://www.jianshu.com/u/6806081fb1cd',
          id: '0004'
        },
        {
          title: 'wanggege919',
          icon: '#icon-git',
          href: 'https://github.com/wanggege919',
          id: '0005'
        },
      ]
    }
  },
  mounted () {
    this.fixHeight()
    this.initVanillaTilt()
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    fixHeight () {
      $('.contact .content .contact-wrapper').each((i, el) => {
        $(el).height($(el).width())
      })
    },
    initVanillaTilt () {
      VanillaTilt.init(document.querySelectorAll('.contactItem'), {
        max: 0,
        speed: 400,
        scale: 1.2
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .contact
    color #fff
    .contact-title
      display inline-block
      border-bottom 5px solid #b5b519
      padding-bottom 14px
      font-weight bold
      color #fff
    .content 
      width 70%
      margin 40px auto
      justify-content center
      align-items center
</style>
