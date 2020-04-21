<template>
  <div class="tag-new-outer">

      <div v-if="type === 'toggle'" @click="changeStatus()" :class="status">
        {{ tagName }}
      </div>  

      <div v-else class="inactive">
        {{ tagName }}
        <img src="@/assets/icon/icon_arrow-down.svg" alt="v">
      </div>
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
        default: 'toggle',
      },
      status: {
        type: String,
        default: 'inactive'
      }
    },
    methods: {
      changeStatus() {
        this.status = this.status === 'inactive' ? 'active' : 'inactive';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tag-new-outer {
    .inactive {
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
    .active{
      display: flex;
      font-size: 13px;
      line-height: 27px;
      color: red;
      border: 1px solid red;
      border-radius: 6px;

      clear: both;
      float: left;

      padding-left: 10px;
      padding-right: 10px;

      background-color: white;
    }
  }

</style>