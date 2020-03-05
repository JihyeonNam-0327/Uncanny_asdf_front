<template>
  <div class="input-box-outer">
    <input class="input-box" 
    :placeholder="placeHolder"
    v-model="text"
    :type="inputType"/>
  </div>
</template>

<script>
  export default {
    props: {
      placeHolder: {
        type: String,
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
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
    }
  }
</script>

<style lang="scss" scoped>
  .input-box-outer {
    .input-box {
      width:100%;
      height:40px;
      font-size: 17px;
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