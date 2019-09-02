import Vue from 'vue'
import Router from 'vue-router'
import Person from './views/person/person.vue'
import Skill from './views/skill/skill.vue'
import Portfolio from './views/portfolio/portfolio.vue'
import Blog from './views/blog/blog.vue'
import Contact from './views/contact/contact.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/person'
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
