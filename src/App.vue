<template>
  <div id="app">
    <div class="flex wrapper">
      <MainNav></MainNav>
      <div class="container">
        <router-view/>
      </div>
    </div>
    <Particle></Particle>
  </div>
</template>
<script>
import MainNav from './components/nav'
import Particle from './components/particle'
export default {
  name: "App",
  components: {
    MainNav,
    Particle
  }
}
</script>
<style lang="stylus">
  .wrapper 
    width 100vw
    height 100vh
    overflow hidden
    font-size 16px
    .container 
      overflow-y: scroll
      background rgba(0, 0, 0, 0.4)
      height 100%
      flex-grow 1
      // width calc(100%-250px)
      & > div 
        padding 50px 50px 0 50px
@media screen and (max-width: 768px) {
  .container {
    padding-top 60px
    & > div {
      padding 10px 10px 0 10px
    }     
  }   
}

</style>
