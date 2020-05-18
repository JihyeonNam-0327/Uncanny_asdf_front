<template>
  <div class="search-keyword-outer">
    <header-component class="header-component" 
    leftType="historyback" 
    centerType="input"
    rightType="search"
    ></header-component>
    <div class="regist-button">
      <a href="#" class="btn purple">버튼 1</a>
    </div>

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
    .regist-button {
      .btn { 
        display: inline-block; 
        border-radius: 3px; 
        text-decoration: none; 
        color: #fff; 
        border-bottom: 2px solid #ccc; 
        transition: background 0.12s ease; 
      } 
      .btn:active { 
        position: relative; 
        top: 2px; 
        margin-bottom: 2px; 
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.42); 
      } 
      .btn { 
        padding: 9px 14px 6px; 
        font-size: 14px; 
      } 
      .purple:link, .purple:visited { 
        background: #918CD2; 
        border-bottom-color: #8480c5; 
      } 
      .purple:hover { 
        background: #9993E3; 
      } 
      .purple:active { 
        border-bottom: 0; 
      }
    }
  }
</style>