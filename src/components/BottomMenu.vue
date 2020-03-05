<template>
  <div class="bottom-menu-outer">
    <div class="home-button" @click="clickHomeBtn">
      <img v-if="clickHome" src="@/assets/icon/icon_home_fill.svg"/>
      <img v-else src="@/assets/icon/icon_home_empty.svg"/>
    </div>
    <div class="map-marker-button" @click="clickMapBtn">
      <img v-if="clickMap" src="@/assets/icon/icon_map_marker_fill.svg"/>
      <img v-else src="@/assets/icon/icon_map_marker_empty.svg"/>
    </div>
    <div class="user-button" @click="clickUserBtn">
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
        this.$emit('userBtnClicked', 'MyPage')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-menu-outer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #E8E8E8;
    div {
      flex-grow: 1;
      width: 33%;
      text-align: center;
      height: 32px;
    }
    img {
      padding-top: 8px;
    }
    .home-button {
      border-right: 1px solid #E8E8E8;
    }
    .map-marker-button {
      border-right: 1px solid #E8E8E8;
    }
    .user-button {

    }
  }
</style>