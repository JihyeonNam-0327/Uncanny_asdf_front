<template>
  <div class="search-keyword-outer">
    <header-component class="header-component" leftType="historyback" centerType="input" rightType="search"></header-component>

  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'

  export default {
    components: {
      HeaderComponent,
    },
  
  }
</script>

<style lang="scss" scoped>
  .search-keyword-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    .header-component {
      width: calc(100% - 16px);
      position: absolute;
      top: 36px;
      left: 0px;
    }
  }
</style>