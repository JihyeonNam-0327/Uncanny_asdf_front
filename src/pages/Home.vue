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
      pageMoveFunc(pageName) {
        this.$router.replace({name: pageName, prams: {}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-menu-component {
    position: absolute;
    width: 100%;
    bottom: 0px;
  }
</style>