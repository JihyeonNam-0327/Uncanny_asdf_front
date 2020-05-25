<template>
  <div >
    <select v-model="selected" >
      <option disabled v-if="label" value="">{{ label }}</option>
      <option v-for="option in options" :value="option.value" :key="option.text">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
  /**
   * SelectBox 사용법
   * - 옵션 선택 전 보여줄 label 문구가 있다면 prop 으로 전달
   * - 옵션의 타입은 Array 로 {text, value} 를 키로 하는 Object 로 구성
   * - 부모 Page 에서 v-model 로 선택된 값 바인딩
   */
  export default {
    props: {
      options: {
        type: Array,
        required: false,
        default: () =>  
        [ 
          {text: '지상', value: '지상'},
          {text: '지하', value: '지하'}
        ]
      },
      label: {
        type: String,
        default: '선택'
      }
    },
    data() {
      return {
        selected: '',
      }
    },
    watch: {
      selected(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  select {
    width: 100%;
    padding: 5px 10px;
    border: 0;
    border-bottom: 1px solid #999;
    font-family: inherit;
    background: url('../assets/icon/icon_arrow_down.svg') no-repeat 95% 50%;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;

  }
</style>