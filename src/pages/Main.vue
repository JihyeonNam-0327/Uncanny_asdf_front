<template>
  <div>
    <p>main page</p>
    <basic-button buttonText="회원가입"></basic-button>
    <input-box class="input-component" @inputValue="getValue"></input-box>
  </div>
</template>

<script>
  import BasicButton from '../components/BasicButton.vue'
  import InputBox from '../components/InputBox.vue'

  export default {
    components: {
      BasicButton,
      InputBox
    },
    methods: {
      getValue(args) {
        console.log(args);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>