<template>
  <div class="search-keyword-outer">

    <div class="search-input-component">
      <search-input-box v-model="keyword" historybutton></search-input-box>
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
  import SearchInputBox from '@/components/SearchInputBox'

  export default {
    components: {
      SearchInputBox,
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
    width: 100vw;
    height: 100vh;
    .search-input-component {
      margin: 0px 15px;
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
      text-align: center;
      margin: 0px 15px;
      padding-top: 11px;
      border-radius: 10px;
      color: white;
      background-color: #3c3c3c;;
    }
  }
</style>