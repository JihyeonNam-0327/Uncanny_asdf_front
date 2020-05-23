<template>
  <div class="search-keyword-outer">

    <div class="search-input-component">
      <search-input-box v-model="keyword" :historybutton="true" @back="backButtonClicked" @search="searchButtonClicked"></search-input-box>
    </div>

    <div class="no-result" v-if="searchResult.length === 0">
      <div class="search-result">
        검색 결과가 없습니다.
      </div>

      <basic-button class="regist-button" buttonText="장소 신규 등록" @clicked="registButtonClicked"></basic-button>
    </div>

  </div>
</template>

<script>
  import SearchInputBox from '@/components/SearchInputBox'
  import BasicButton from '@/components/BasicButton'

  export default {
    components: {
      SearchInputBox,
      BasicButton
    },
    data() {
      return {
        keyword: '',
        searchResult: []
      }
    },
    watch: {
      searchKeyword(newValue) {
      }
    },    
    methods: {
      backButtonClicked() {
        this.pageMove('MapPage')
      },
      searchButtonClicked() {
        console.log('search!')
        // this.$api.search()
      },
      registButtonClicked() {
        console.log('object');
        this.pageMove('RegisterStore')    
      },
      pageMove(where) {
        this.$router.push({name: where})
      },
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
      margin: 50px 15px;
    }
    .no-result {
      margin: 0px 15px;
      .search-result {
        margin: 15px;
        text-align: center;
        color: #CC6A6A;
        font-size: 14px;
      }
      .regist-button {
        width: 100%;
        margin-top: 50px;
      }
    }
  }
</style>