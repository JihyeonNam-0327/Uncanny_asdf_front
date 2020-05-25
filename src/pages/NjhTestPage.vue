<template>
  <div>
    <filter-dropdown></filter-dropdown>

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
  import FilterDropdown from '@/components/FilterDropdown'
  export default {
   components: {
     FilterDropdown
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