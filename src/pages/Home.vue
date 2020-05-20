<template>
  <div class="home-outer">
    <router-view></router-view>
    <bottom-menu class="bottom-menu-component" @homeBtnClicked="pageMoveFunc" @mapBtnClicked="pageMoveFunc" @userBtnClicked="pageMoveFunc"></bottom-menu>
  </div>
</template>

<script>
  import BottomMenu from '@/components/BottomMenu'

  export default {
    components: {
      BottomMenu
    },
    methods: {
      pageMoveFunc(routerName) {
        this.$router.replace({name: routerName, prams: {}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-outer {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    position: relative;
    width: 100%;
    .bottom-menu-component {
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 200;
    }
  }
</style>