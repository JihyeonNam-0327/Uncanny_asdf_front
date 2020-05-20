<template>
  <div class="input-box-outer">
    <input class="input-box" 
    :placeholder="placeHolder"
    v-model="text"/>
    <button @click="changeFunc">
      button
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      placeHolder: {
        type: String,
        default: '이메일'
      }
    },
    data() {
      return {
        text: ''
        }
    },
    watch: {
      text: function(newValue) {
        this.$emit('inputValue', newValue)
      }
    },
    methods: {
      changeFunc() {
        this.text = this.text + '1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-box-outer {
    .input-box {
      width:100%;
      height:40px;
      border:0;
      border-bottom:1px solid #707070;
      padding-left:9.5px;
    }
    .input-box:focus{
      outline:none;
    }
    .input-box::placeholder{
      color:#AFAFAF;
      font-size:17px;
    }
  }
</style>