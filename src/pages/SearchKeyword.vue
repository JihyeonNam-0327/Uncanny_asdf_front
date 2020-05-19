<template>
  <div class="search-keyword-outer">

    <div class="header-outer">
      <div class="left-historyback" @click="backButtonClick()">
        <img src="../assets/icon/icon_arrow_back.svg" alt="">
      </div>
      
      <div class="center-input">
        <input class="center-inputbox" type="text" v-model="searchString">
      </div>

      <div class="right-search" @click="searchButtonClick">
        <img src="../assets/icon/icon_search.svg" alt="">
      </div>
    </div>

    <div class="filter-outer">
      filter - filter - filter - filter - filter - filter - filter - filter
    </div>

    <div class="search-result">
      search-result - search-result - search-result
    </div>

    <div class="regist-button" @click="registButtonClick">
      장소 신규 등록
    </div>

  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        searchString: '',
      }
    },
    watch: {
      searchString(newValue) {
        console.log(newValue)
      }
    },    
    methods: {
      backButtonClick() {
        console.log('back!')
      },
      searchButtonClick() {
        console.log('seartch!')
      },
      registButtonClick() {
        console.log('regist!')      
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-keyword-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    .header-outer {
      display: flex;
      width: 90vw;
      height: 50px;
      border: 1px solid black;
      border-radius: 5px;
      .left-historyback {
        width: 10vw;
        padding-top: 12px;
        text-align: center;
      }
      .center-input {
        width: calc(70vw - 10px);
        height: 30px;
        margin: 2px 5px 0px 5px;
        padding: 10px 0px 7px 0px;
        .center-inputbox {
          display : block;
          margin : 0 auto;
          width: calc(70vw - 10px);
          border-right:0px; 
          border-top:0px;
          border-left:0px; 
          border-bottom: 1px solid black;
          border-radius: 0px;
          font-size: 15px;
        }
      }
      .right-search {
        width: 10vw;
        padding-top: 13px;
        text-align: center;
      }
    }
    .filter-outer {
      margin: 15px;
      text-align: center;
    }
    .search-result {
      margin: 15px;
      text-align: center;
    }
    .regist-button {
      width: 90vw;
      height: 40px;
      padding-top: 11px;
      border-radius: 10px;
      text-align: center;
      color: white;
      background-color: #3c3c3c;;
    }
  }
</style>