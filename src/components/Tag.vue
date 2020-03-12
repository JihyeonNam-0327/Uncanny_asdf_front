<template>
  <div class="tag-outer">

    <div class="tag-container">
      <div class="tag-filter" :key="index" v-for="(item, index) in filterItem">
          {{ item.filterName }}
          <img src="@/assets/icon/icon_arrow-down.svg" alt="x">
      </div>
    </div>

    <div class="tag-refresh">
      <img src="@/assets/icon/icon_refresh.svg">
    </div>

   </div>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
        filterItem: [
          { filterName: '연남', status: 'active' },
          { filterName: '주차가능', status: 'active' },
          { filterName: '주차가능', status: 'active' },
          { filterName: '주차가능', status: 'active' },
          { filterName: '주차가능', status: 'active' },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tag-outer {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 13px;
    .tag-container {
        display: flex;
        width: calc(100%-30px);
        line-height: 27px;
        vertical-align: middle;
        overflow-x: scroll;
        .tag-filter {
          flex: 0 0 auto;
          border: 1px solid black;
          border-radius: 6px;
          padding-left: 12px;
          padding-right: 8px;
          margin-right: 10px;
          text-align: center;
          background-color: white;
          img {
            padding: 7px 5px 7px 7px;
            vertical-align: middle;
          }
        }
      }
    .tag-refresh {
      margin-left: 10px;
      img {
          padding: 7px;
          vertical-align: middle;
      }
    }
  }
</style>