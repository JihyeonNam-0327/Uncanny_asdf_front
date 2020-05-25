<template>
  <div class="basic-button-outer" @click="buttonClicked">
    <div class="button-outline">
      <div class="text-box">
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: '로그인'
      }
    },
    methods: {
      buttonClicked() {
        this.$emit('clicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-button-outer {
    .button-outline {
      width:100%;
      height:45px;
      background:#3C3C3C 0% 0% no-repeat padding-box;
      border-radius: 15px;
      opacity:1;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>