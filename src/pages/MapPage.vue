<template>
  <div class="map-page-outer">

    <div class="search-input-component" @click="pageMove('Searchkeyword')">
      <search-input-box v-model="keyword"></search-input-box>
    </div>

    <div class="tag-outer">
      <div class="tag-control" @click="pageMove('SearchFilterTag')">
        <img src="@/assets/icon/icon_control.svg">
      </div>
      <div class="tag-list" v-click-outside="closeAllFilter">
        <div class="tag-element" v-for="(item, index) in filterList" :key="index">
          <filter-component :filter="item" @categoryClicked="openFilter(item, index)"></filter-component>
        </div>
      </div>
    </div>

    <div class="map-outer">
      <basic-map class="map"></basic-map>
    </div>

  </div>
</template>

<script>
  import BasicMap from '@/components/BasicMap'
  import SearchInputBox from '@/components/SearchInputBox'
  import FilterComponent from '@/components/Filter'

  export default {
    components: {
      BasicMap,
      SearchInputBox,
      FilterComponent
    },
    data() {
      return {
        keyword: '',
        filterList: [
          {
          category: '좌석수',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name: '10개 이하', selected: false}, 
            {name: '10-30', selected: false}, 
            {name: '30-50', selected: false}, 
            {name: '50-70', selected: false},
            {name: '70-90', selected: false},
            {name: '90개 이상', selected: false}
          ]
          },
          {
          category: '카테고리',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'카페', selected: false},
            {name:'차', selected: false},
            {name:'디저트', selected: false},
            {name:'식당', selected: false},
            {name:'주점', selected: false},
            {name:'문화', selected: false},
            {name:'기타', selected: false}
          ]
          },
          {
          category: '주차정보',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'주차불가', selected: false},
            {name:'무료주차', selected: false},
            {name:'유료주차', selected: false},
            {name:'무료발렛', selected: false},
            {name:'유료발렛', selected: false}
          ]
          },
          {
          category: '유형',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'포장/테이크아웃', selected: false},
            {name:'배달가능', selected: false},
            {name:'드라이브스루', selected: false},
            {name:'애견동반', selected: false}
          ]
          },
          {
          category: '유아',
          type: 'radio',
          isOpen: false,
          option: [
            {name:'노키즈존', selected: false},
            {name:'유아의자', selected: false}
          ]
          },
          {
          category: '공간',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'혼밥가능', selected: false},
            {name:'단체석', selected: false},
            {name:'룸', selected: false},
            {name:'높은테이블', selected: false},
            {name:'콘센트', selected: false},
            {name:'무료 Wi-Fi', selected: false},
            {name:'테라스', selected: false},
            {name:'루프탑', selected: false},
            {name:'흡연시설', selected: false}
          ]
          },
          {
          category: 'Good for',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'아침', selected: false},
            {name:'브런치', selected: false},
            {name:'점심', selected: false},
            {name:'저녁', selected: false},
            {name:'늦은저녁', selected: false},
            {name:'디카페인', selected: false},
            {name:'비건', selected: false},
            {name:'할랄', selected: false}
          ]
          },
          {
          category: '지불방법',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'카드불가', selected: false},
            {name:'현금불가', selected: false},
            {name:'카카오페이', selected: false},
            {name:'네이버페이', selected: false},
            {name:'지역상품권', selected: false},
            {name:'긴급재난지원금', selected: false}
          ]
          },
          {
          category: '화장실',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'내부', selected: false},
            {name:'외부', selected: false},
            {name:'남녀공용', selected: false},
            {name:'남녀구분', selected: false}
          ]
          },
          {
          category: '기타',
          type: 'selectbox',
          isOpen: false,
          option: [
            {name:'해피아워', selected: false},
            // {name:'지역상품권', selected: false},
            // {name:'긴급재난지원금', selected: false},
          ]
          },
        ]
      }
    },
    watch: {
    },
    computed: {
    },
    methods: {
      openFilter(selected) {
        this.filterList.forEach(item => {
          if(item.category === selected.category) {
            item.isOpen = !item.isOpen
          } else {
            item.isOpen = false
          }
        })
      },
      closeAllFilter() {
        this.filterList.forEach(item => {
          item.isOpen = false
        })
      },
      pageMove(where) {
        this.$router.push({name: where})
      }
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  .map-page-outer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    *:focus {
      outline: none;
    }
    .search-input-component {
      position: absolute;
      margin: 0 15px;
      width: calc(100% - 30px);
      top: 50px;
      z-index: 101;
    }
    .tag-outer {
      position: absolute;
      width: calc(100% - 30px);
      display: flex;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 100px;
      z-index: 101;
    .tag-control {
      height: fit-content;
      background-color: #ffffff;
      border-radius: 10px;
      border: 0.5px solid #707070;
      img {
          vertical-align: middle;
          margin-top: 1px;
          padding: 8px 8px 7px 8px;
        }
      }
    }
    .tag-list {
      overflow-y: scroll;
      display: flex;
      .tag-element {
        padding-left: 10px;
      }
      .tag-element:last-child {
        margin-right: 10px;
      }
    }
    .map-outer {
      height: 100%;
      .map {
        height: 100%;
      }
    }
  }
</style>