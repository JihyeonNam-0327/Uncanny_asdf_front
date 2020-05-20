<template>
  <div class="search-input-outer">
    <div v-if="historybutton" class="back-button" @click="backButtonClicked">
      <img src="@/assets/icon/icon_arrow_back.svg" alt="back-button">
    </div>

    <input class="input-box"
    :style="leftMargin"
    :placeholder="placeHolder"
    :type="inputType"
    :value="value"
    @input="emitValue($event.target.value)"/>

    <div class="search-botton" @click="searchButtonClicked">
      <img src="@/assets/icon/icon_search.svg" alt="saerch-button">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      historybutton: {
        type: Boolean,
        default: false
      },
      placeHolder: {
        type: String,
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
      },
      value: {
        type: [ String, Number, Boolean, Function, Object, Array, Symbol ],
        default: ''
      }
    },
    data() {
      return {
        inputValue: undefined
      }
    },
    computed: {
      leftMargin() {
        if(this.historybutton) return 'padding-left: 30px;'
        else return 'padding-left: 15px;'
      }
    },
    watch: {
    },
    methods: {
      emitValue(value) {
        this.$emit('input', value)
      },
      searchButtonClicked() {
        this.$emit('search')
      },
      backButtonClicked() {
        this.$emit('back')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-input-outer {

    .back-button {
      position: relative;
      width: fit-content;
      top: 34px;
      left: 13px;
    }
    .input-box {
      width: 100%;
      height:40px;
      font-size: 17px;
      background-color: #FFFFFF;
      border: 0.5px solid #707070;
      border-radius: 10px;
      padding-left: 7px;
      padding-right: 35px;
      padding-top: 4px;
      box-sizing: border-box;
    }
    .input-box:focus{
      outline:none;
    }
    .input-box::placeholder{
      color:#AFAFAF;
      font-size:17px;
    }
    .search-botton {
      position: relative;
      width: fit-content;
      top: -30px;
      left: calc(100% - 35px);
      z-index: 5;
    }
  }
</style>