<template>
    <div class="nav-wrapper">
        <div class="sideNav">
            <h1>Lsw's resume</h1>
            <ul>
                <router-link 
                :to="item.href" 
                tag="li" 
                v-for="item in list" 
                :key="item.id"
                @click.native = "hideSideNav"
                >
                    <svg class="icon">
                        <use :xlink:href="item.icon" />
                    </svg>
                    {{item.label}}
                </router-link>
            </ul>
            <div class="button-pdf animated swing infinite slow">
                <button class="button-label ">
                    <a href="https://wanggege919.github.io/my-resume/pdf/pdf.html" target="_blank">查看PDF</a>
                </button>
            </div>
        </div>
        <div class="topNav">
            <div class="topNav-content">
                <h1>Lsw's resume</h1>
                <div class="icon-wrapper animated jello infinite slow" @click="showSideNav">
                    <svg class="icon">
                        <use xlink:href="#icon-cebianlan_tansuo" />
                    </svg>
                </div>
            </div>                       
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: "Nav",
    data () {
      return {
          list: [
               {
                    label: "个人 About me",
                    href: "/person",
                    icon: "#icon-icon_patriarch",
                    id: 1001
                },
                {
                    label: "技能 Technology stack",
                    href: "/skill",
                    icon: "#icon-icon_workmore",
                    id: 1002
                },
                {
                    label: "项目 Protfolio",
                    href: "/portfolio",
                    icon: "#icon-icon_file",
                    id: 1003
                },
                {
                    label: "精选博客 Blog",
                    href: "/blog",
                    icon: "#icon-ego-blog",
                    id: 1004
                },
                {
                    label: "联系我 Concat me",
                    href: "/contact",
                    icon: "#icon-icon_voipphone",
                    id: 1005
                }
           ]
      }  
    },
    mounted () {
        this.initNav()
    },
    methods: {
        initNav () {
            $('#app').on('touchstart', e => {
                this.touchstartX = e.touches[0].clientX
                // console.log(e.touches[0].clientX)
            })
            $('#app').on('touchend', e => {
                let touchendX = e.changedTouches[0].clientX
                this.diff = touchendX - this.touchstartX
                if(this.diff < -20){
                    $('.sideNav').removeClass('show')
                }
            })
            $('.container').on('click', e => {
                $('.sideNav').removeClass('show')
            })
        },
        showSideNav () {
            $('.sideNav').toggleClass('show')
        },
        hideSideNav () {
            $('.sideNav').removeClass('show')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .sideNav
        width 250px
        height 100vh
        background rgba(0, 0, 0, 0.8)
        color #fff
        transition all 0.5s
        h1 
            line-height 60px
            text-align center
        ul 
            margin-top 20px
            li 
                padding 20px
                transition all 0.5s
            .router-link-active
                background-color #fff
                color red
        .button-pdf
            display inline-block
            // border 1px solid red
            position absolute
            left 30px 
            bottom 30px
            .button-label
                border-radius 4px
                background #c3b327
                // border 1px solid blue
                a
                    display block
                    padding 14px 20px
                    width 100%
                    height 100%
                    color #fff
    .topNav
        position fixed
        top 0
        left 0
        background-color #d43b33
        color #fff
        width 100%
        height 60px
        display none
        z-index 2
        .topNav-content
            height 100%
            // border 1px solid blue
            display flex
            align-items center
            justify-content space-between
            padding 0 20px
            h1 
                margin-bottom 4px
            .icon-wrapper
                cursor pointer

@media screen and (max-width: 768px) {
    .topNav {
        display block
    }
    .sideNav {
        background-color #d43b33
        width 234px
        transition all 0.5s
        position fixed
        left -100% 
        z-index 1
        ul {
            li {
                 padding 14px 20px
                 transition all 0.5s
            }
        }
        &.show {
            left 0
        }    
               
    }
        
}
</style>