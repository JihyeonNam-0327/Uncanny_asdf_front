<template>
  <div>
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
  .bottom-menu-component {
    /* position: absolute; */
    position: fixed;
    width: 100%;
    bottom: 0px;
    z-index: 5;
    background-color: #FFFFFF;
  }
</style>