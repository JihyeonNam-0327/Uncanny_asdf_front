<template>
  <div class="map-page-outer">

    <div class="search-input-component">
      <search-input-box v-model="keyword"></search-input-box>
    </div>

    <div class="tag-outer">
      <div class="tag-control">
        <img src="@/assets/icon/icon_control.svg">
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
  export default {
    components: {
      BasicMap,
      SearchInputBox
    },
    data() {
      return {
        keyword: ''
      }
    },
    watch: {
    },
    computed: {
    },
    methods: {
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
      margin: 0px 15px;
    }
    .tag-outer {
      display: flex;
      font-size: 13px;
      margin-left: 15px;
      margin-right: 15px;
    .tag-control {
      margin-left: 10px;
      border-radius: 6px;
      border: 1px solid black;
      img {
          vertical-align: middle;
          margin-top: 2px;
          padding: 3px 5px;
        }
      }
    }
    .map-outer {
      margin-top: 10px;
      height: 100%;
      .map {
        height: 100%;
      }
    }
  }
</style>