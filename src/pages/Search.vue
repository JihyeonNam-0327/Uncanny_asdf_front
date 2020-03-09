<template>
  <div class="search-outer">
    <header-component class="header-component" leftType="historyback" centerType="underbar" rightType="search"></header-component>
    <div class="search-tag-background">
      <tag class="search-tag"></tag>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>지역</p>
      selectbox
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>카테고리</p>
      selectbox
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>방문시간</p>
      dial
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>체류시간</p>
      dial
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>작업환경</p>
      <toggle-button class="toggle" v-model="outlet" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <div>주차</div>
      <toggle-button class="toggle" v-model="outlet" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
    </div>

  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import Tag from '@/components/Tag'

  export default {
    data() {
      return {
        place: ['전체', '연남', '연희', '망원', '상수', '서교'],
      }
    },
    components: {
      HeaderComponent,
      Tag,
    }
  }
</script>

<style lang="scss" scoped>
  .search-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    .horizontal-line {
      width: 100%;
      height: 1px;
      margin-top: 6px;
      margin-bottom: 6px;
      background-color: #EBEBEB;
    }
    .header-component {
      width: calc(100% - 16px);
      position: absolute;
      top: 36px;
      left: 0px;
    }
    .search-tag-background {
      background-color: #F7F7F7;
      width: 100%;
      height: 52px;
      position: absolute;
      top: 85px;
      left: 0px;
      .search-tag {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .filter-container {
      display: flex;
      width: calc(100% - 86px);
      .toggle {
        margin-left: auto;
        margin-top: auto;
      }
    }

  }
</style>