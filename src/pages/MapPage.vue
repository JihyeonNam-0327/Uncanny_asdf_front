<template>
  <div class="map-page-outer">

    <div class="search-input-component">
      <search-input-box v-model="keyword"></search-input-box>
    </div>

    <div class="tag-outer">
      <div class="tag-control">
        <img src="@/assets/icon/icon_control.svg">
      </div>
      <div class="tag-list">
        <div v-for="(item, index) in filterList" :key="index" tabindex="0" @blur="eventCheck">
          <filter-component class="tag-element" :filter="item" :indexNum="index" :close="close" @changeClose="close = !close"></filter-component>
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
        close: true,
        filterList: [
          {
          category: '주차',
          type: 'selectbox',
          option: [
            {name: '무료', selected: false}, 
            {name: '유료', selected: false}, 
            {name: '발렛', selected: false}
          ]
          },
          {
          category: '입장시간',
          type: 'selectbox',
          option: [
            {name: '1시', selected: false}, 
            {name: '2시', selected: false}, 
            {name: '3시', selected: false}, 
            {name: '4시', selected: false},
            {name: '5시', selected: false}, 
            {name: '6시', selected: false}, 
          ]
          },
          {
          category: '가격',
          type: 'radio',
          option: [
            {name: '1원', selected: false}, 
            {name: '2원', selected: false}, 
            {name: '3원', selected: false}, 
            {name: '4원', selected: false}
          ]
          },
          {
          category: '입장시간',
          type: 'selectbox',
          option: [
            {name: '1시', selected: false}, 
            {name: '2시', selected: false}, 
            {name: '3시', selected: false}, 
            {name: '4시', selected: false},
            {name: '5시', selected: false}, 
            {name: '6시', selected: false}, 
          ]
          }
        ]
      }
    },
    watch: {
    },
    computed: {
    },
    methods: {
      eventCheck() {
        console.log('blur called');
        this.close = true
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
    .search-input-component {
      position: absolute;
      margin: 0 15px;
      width: calc(100% - 30px);
      top: 50px;
      z-index: 101;
    }
    .tag-outer {
      position: absolute;
      width: 100%;
      display: flex;
      margin-left: 15px;
      margin-right: 15px;
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
      div:focus {
        outline: none;
      }
      .tag-element {
        margin-left: 10px;
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