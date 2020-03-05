<template>
  <div class="heart-button-outer" @click="heartClicked">
    <div>
      <img src="@/assets/icon/icon_heart_empty.svg"/>
    </div>
    <div>
      <span>{{ totalCount }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      totalCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      heartClicked() {
        this.$emit('heartBtnClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .heart-button-outer {
    display: flex;
    flex-direction: column;
    height: 46px;
    font-size: 11px;
    img {
      width: 13px;
      margin: auto 0;
    }
    span {
      margin: auto 0;
    }
    div {
      display: flex;
      height: 50%;
      margin: 0 auto;
    }
  }
</style>