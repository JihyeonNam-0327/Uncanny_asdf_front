<template>
  <div class="bottom-menu-outer">
    <div class="menu-button" @click="clickHomeBtn">
      <img v-if="clickHome" src="@/assets/icon/icon_home_fill.svg"/>
      <img v-else src="@/assets/icon/icon_home_empty.svg"/>
    </div>
    <div class="menu-button" @click="clickMapBtn">
      <img v-if="clickMap" src="@/assets/icon/icon_map_marker_fill.svg"/>
      <img v-else src="@/assets/icon/icon_map_marker_empty.svg"/>
    </div>
    <div class="menu-button" @click="clickUserBtn">
      <img v-if="clickUser" src="@/assets/icon/icon_user_fill.svg"/>
      <img v-else src="@/assets/icon/icon_user_empty.svg"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clickHome: true,
        clickMap: false,
        clickUser: false
      }
    },
    methods: {
      clickHomeBtn() {
        this.clickHome = !this.clickHome
        this.clickMap = false
        this.clickUser = false
        this.$emit('homeBtnClicked', 'Main')
      },
      clickMapBtn() {
        this.clickMap = !this.clickMap
        this.clickHome = false
        this.clickUser = false
        this.$emit('mapBtnClicked', 'MapPage')
      },
      clickUserBtn() {
        this.clickUser = !this.clickUser
        this.clickHome = false
        this.clickMap = false
        this.$emit('userBtnClicked', 'Login')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-menu-outer {
    display: flex;
    width: inherit;
    height: 45px;
    justify-content: space-between;
    border-top: 1px solid #E8E8E8;
    background-color: #FFFFFF;
    .menu-button {
      border-right: 1px solid #E8E8E8;
      width: 33%;
      flex-grow: 1;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .menu-button:last-child {
      border-right: 0;
    }
  }
</style>