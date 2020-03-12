<template>
  <div class="tag-new-outer" >
    {{ tagName }}
    <img v-if="type === 'select'"
    src="@/assets/icon/icon_arrow-down.svg" alt="v">
  </div>
</template>

<script>
  export default {
    props: {
      tagName: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'boolean',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tag-new-outer {
    display: flex;
    font-size: 13px;
    line-height: 27px;
    border: 1px solid black;
    border-radius: 6px;

    clear: both;
    float: left;

    padding-left: 10px;
    padding-right: 10px;

    background-color: white;

    img {
      padding: 7px 0px 7px 7px;
      vertical-align: middle;
    }
  }
</style>