<template>
  <div class="detail-filter-outer">

    <div class="group-title">
      <div class="group-name">필터태그</div>
      <div class="group-edit">수정</div>
    </div>

    <div class="group-filter">
      <div class="filter-tag" v-for="(filterTag, index) in storeFilter" :key="index">
        {{ filterTag }}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      storeFilter: {
        type: Array
      },
    }
  }
</script>

<style lang="scss" scoped>
  .detail-filter-outer {
    margin: 15px;
    .group-title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      .group-edit {
        font-size: 12px;
      }
    }
    .group-filter {
      display: flex;
      flex-wrap : wrap;

      .filter-tag {
        color: gray;
        font-size: 12px;

        border-radius: 20px;
        border: 1px solid grey;
        
        margin: 2px;
        padding: 2px 8px;
      }
    }
  }

</style>