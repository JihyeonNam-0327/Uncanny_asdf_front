<template>
  <div class="header-component-outer">
    <div class="left-historyback" v-if="leftType === 'historyback'">
      <img src="../assets/icon/icon_arrow_back.svg" alt="">
    </div>

    <div class="center-underbar" v-if="centerType === 'underbar'">
    </div>
    <div class="center-none" v-else>
    </div>
  
    <div class="right-underbar" v-if="rightType === 'search'">
      <img src="../assets/icon/icon_search.svg" alt="">
    </div>
    <div class="right-home" v-else>
      <img src="../assets/icon/icon_home_empty.svg" alt="">
    </div>
  </div>
      <!-- <div :class="[header-left, toggle]">left</div> ???  -->
</template>


<script>
  export default {
    props: {
      leftType: {
        type: String,
        default: 'none'
      },
      centerType: {
        type: String,
        default: 'none'
      },
      rightType: {
        type: String,
        default: 'none'
      }
    }
  }
</script>

<style lang="scss" scoped>
.header-component-outer {
  display: flex;
  margin: 8px;
  height: 30px;
  /* border: 1px solid #707070; */
  .left-historyback {
    width: 21px;
    padding-top: 7px;
    padding-left: 11px;
    /* border: 1px solid blue; */
    flex: 0 0 auto;
  }
  .center-underbar {
    width: 100%;
    border-bottom: 1px solid #707070;
    flex: 1 1 auto;
    margin-left: 5px;
    margin-right: 5px;
  }
  .center-none {
    width: 100%;
    flex: 1 1 auto;
    margin-left: 5px;
    margin-right: 5px;
  }
  .right-underbar {
    width: 25px;
    padding-top: 7px;
    padding-left: 7px;
    /* border: 1px solid red; */
    flex: 0 0 auto;
  }
  .right-home {
    width: 25px;
    padding-top: 7px;
    padding-left: 7px;
    /* border: 1px solid red; */
    flex: 0 0 auto;
  }
}
</style>