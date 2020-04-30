<template>
  <div class="flter-outer">
    <span>{{}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: Object,
        // default: {
        //   category: "운영시간",
        //   option: [],
        //   type: "check",
        //   selected: []
        // }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flter-outer {
    height: 32px;
    border: 0.5px solid #636363;
    border-radius: 15px;
  }
</style>