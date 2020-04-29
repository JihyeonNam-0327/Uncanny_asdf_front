<template>
  <div class="header-component-outer">
    <div 
      class="left-historyback" 
      v-if="leftType === 'historyback'"
      @click="backButtonClick">
      <img src="../assets/icon/icon_arrow_back.svg" alt="">
    </div>

    <!-- <div 
      class="center-underbar" 
      v-if="centerType === 'underbar'"
      @click="searchButtonClick">
    </div>
    <div 
      class="center-input" 
      v-else-if="centerType === 'input'">
      <input class="center-inputbox" type="text" v-model="searchString">
    </div>
    <div
      class="center-none"
      v-else>
    </div> -->
  
    <!-- <div 
      class="right-search" 
      v-if="rightType === 'search'"
      @click="searchButtonClick">
       <img src="../assets/icon/icon_search.svg" alt="">
    </div>
    <div 
      class="right-home" 
      @click="homeButtonClick"
      v-else>
      <img src="../assets/icon/icon_home_empty.svg" alt="">
    </div> -->
  </div>
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
    },
    data() {
      return {
        searchString: ''
      }
    },
    watch: {
      searchString(newValue) {
        this.$emit('getSearchString', newValue)
      }
    },
    methods: {
      backButtonClick() {
        this.$emit('backButtonClick')
      },
      searchButtonClick() {
        this.$emit('searchButtonClick')
      },
      homeButtonClick() {
        this.$emit('homeButtonClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
.header-component-outer {
  display: flex;
  margin: 8px;
  height: 30px;
  .left-historyback {
    width: 21px;
    padding-top: 7px;
    padding-left: 11px;
    flex: 0 0 auto;
  }
  .center-underbar {
    width: 100%;
    border-bottom: 1px solid #707070;
    flex: 1 1 auto;
    margin-left: 5px;
    margin-right: 5px;
  }
  .center-input {
    width: 100%;
    border-bottom: 1px solid #707070;
    flex: 1 1 auto;
    margin-left: 5px;
    margin-right: 5px;
    .center-inputbox {
      width: 100%;
      outline: none;
      border: 0;
      padding-top: 7px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 13px;
    }
  }
  .center-none {
    width: 100%;
    flex: 1 1 auto;
    margin-left: 5px;
    margin-right: 5px;
  }
  .right-search {
    width: 25px;
    padding-top: 7px;
    padding-left: 7px;
    flex: 0 0 auto;
  }
  .right-home {
    width: 25px;
    padding-top: 7px;
    padding-left: 7px;
    flex: 0 0 auto;
  }
}
</style>