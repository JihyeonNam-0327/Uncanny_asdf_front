<template>
  <div>
    <header-component 
      leftType="historyback" 
      centerType="underbar" 
      rightType="search">
    </header-component>
    <header-component 
      leftType="none" 
      centerType="underbar" 
      rightType="search">
    </header-component>
    <header-component 
      leftType="none" 
      centerType="none" 
      rightType="home">
    </header-component>
    <header-component 
      leftType="historyback" 
      centerType="none" 
      rightType="home">
    </header-component>
  </div>  
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'

  export default {
    components: {
      HeaderComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>