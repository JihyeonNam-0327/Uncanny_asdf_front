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
        <tagNew class="tag-filter" tagName="방문시간" type="select"></tagNew>
        <tagNew class="tag-filter" tagName="작업환경" type="select"></tagNew>
        <tagNew class="tag-filter" tagName="주차"></tagNew>
        <tagNew class="tag-filter" tagName="애견동반"></tagNew>
        <tagNew class="tag-filter" tagName="촬영"></tagNew>
        <tagNew class="tag-filter" tagName="대관"></tagNew>
        <tagNew class="tag-filter" tagName="아메리카노지수" type="select"></tagNew>
      </div>
      <div class="tag-control">
        <img src="@/assets/icon/icon_control.svg">
      </div>
    </div>

    <div class="map-outer">
      map
    </div>  

  </div>
</template>

<script>
  import TagNew from '@/components/TagNew'

  export default {
    components: {
      TagNew,
    }
  }
</script>

<style lang="scss" scoped>
  .map-page-outer {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    width: 100%;
    height: 100vh;

    .header-outer {
      display: flex;
      width: calc(100% - 30px);
      height: 36px;
      margin-left: 15px;
      flex-direction: row;
      justify-content: center;
      .header-menu {
        display: flex;
        border-bottom: 1px solid #707070;
        height: 35px;
        .header-select {
          padding: 5px 12px;
          height: 25px;
        }
        #selected {
          font-weight: bold;
          border-bottom: 2px solid black;
        }
      }
      .header-search {
        margin-left: 5px;
        padding: 10px;
        height: 20px;
      }
    }

    .horizontal-line {
      width: 100%;
      height: 1px;
      margin: 10px 0px;
      background-color: #EBEBEB;
    }

    .tag-outer {
      display: flex;
      font-size: 13px;
      margin-left: 15px;
      margin-right: 15px;
      .tag-container {
        display: flex;
        line-height: 27px;
        /* vertical-align: middle; */
        overflow-x: scroll;
        .tag-filter {
          margin-left: 2px;
          margin-right: 2px;
          flex: 0 0 auto;
          border: 1px solid black;
          border-radius: 6px;
          text-align: center;
          background-color: white;
          img {
            padding: 7px 5px 7px 7px;
            vertical-align: middle;
          }
        }
      }
    .tag-control {
      margin-left: 10px;
      border-radius: 6px;
      border: 1px solid black;
      img {
          vertical-align: middle;
          margin-top: 2px;
          padding: 3px 5px;
      }
    }

    }
  }

</style>