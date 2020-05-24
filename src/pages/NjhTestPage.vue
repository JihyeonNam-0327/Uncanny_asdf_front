<template>
  <div>
    <filter-component></filter-component>

    <vs-collapse accordion class="menu-collapse">
     <vs-collapse-item>
        <div slot="header">
          Menu
        </div>
        <p>
          아메리카노 ・・・ 4,900원
        </p>
        <p>
          아메리카노 ・・・ 4,900원
        </p>
        <p>
          아메리카노 ・・・ 4,900원
        </p>
        <p>
          아메리카노 ・・・ 4,900원
        </p>
        <p>
          아메리카노 ・・・ 4,900원
        </p>
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
  import FilterComponent from '@/components/Filter'
  export default {
   components: {
     FilterComponent
   } 
  }
</script>

<style lang="scss" scoped>
  .menu-collapse {
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
</style>