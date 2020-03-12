<template>
  <div class="tag-outer">
    {{ tagName }}
    <img src="@/assets/icon/icon_arrow-down.svg" alt="v">
  </div>
</template>

<script>
  export default {
    props: {
      tagName: {
        type: String,
        default: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tag-outer {
    display: flex;
    font-size: 13px;
    line-height: 27px;
    border: 1px solid black;
    border-radius: 6px;

    clear: both;
    float: left;

    padding-left: 12px;
    padding-right: 8px;

    background-color: white;
    img {
      padding: 7px 5px 7px 7px;
      vertical-align: middle;
    }
  }
</style>