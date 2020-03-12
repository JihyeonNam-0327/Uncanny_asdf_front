<template>
  <div class="map-page-outer">

    <div class="header-outer">
      <div class="header-menu">
        <div class="header-select" id="selected">CAFE</div>
        <div class="header-select">RESTAURANT</div>
        <div class="header-select">BAR</div>
        <div class="header-select">PUB</div>
      </div>
      <div class="header-search"><img src="@/assets/icon/icon_search.svg"></div>
    </div>

    <div class="horizontal-line"></div>

    <div class="tag-outer">
      <div class="tag-container">
        <tagEdit class="tag-filter" tagName="방문시간"></tagEdit>
        <tagEdit class="tag-filter" tagName="작업환경"></tagEdit>
        <tagEdit class="tag-filter" tagName="주차"></tagEdit>
        <tagEdit class="tag-filter" tagName="애견동반"></tagEdit>
        <tagEdit class="tag-filter" tagName="촬영"></tagEdit>
        <tagEdit class="tag-filter" tagName="대관"></tagEdit>
        <tagEdit class="tag-filter" tagName="아메리카노지수"></tagEdit>
      </div>
    </div>

  </div>
</template>

<script>
  import TagEdit from '@/components/TagEdit'

  export default {
    components: {
      TagEdit,
    }
  }
</script>

<style lang="scss" scoped>
  .map-page-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    .header-outer {
      display: flex;
      width: calc(100% - 30px);          
      flex-direction: row;
      justify-content: center;
      .header-menu {
        display: flex;
        border-bottom: 1.2px solid #707070;
        .header-select {
          padding: 5px 12px;
          height: 36px;
        }
        #selected {
          font-weight: bold;
          border-bottom: 2px solid black;
        }
      }
      .header-search {
        margin-left: 5px;
        padding: 10px;
        height: 36px;
      }
    }

    .horizontal-line {
      width: 100%;
      height: 1px;
      margin: 10px 0px;
      background-color: #EBEBEB;
    }

  }

</style>