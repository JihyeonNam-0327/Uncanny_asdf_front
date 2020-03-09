<template>
  <div>
    <header-component leftType="historyBack" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="home"></header-component>
    <select-box v-model="selectedValue"></select-box>
  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import SelectBox from '@/components/SelectBox'

  export default {
    components: {
      HeaderComponent,
      SelectBox
    },
    data() {
      return {
        selectedValue: ''
      }
    },
    watch: {
      selectedValue(newVal) {
        console.log(newVal);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>