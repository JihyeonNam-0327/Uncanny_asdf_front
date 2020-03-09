<template>
  <div class="search-outer">
    <header-component class="header-component" leftType="historyback" centerType="underbar" rightType="search"></header-component>
    <div class="search-tag-background">
      <tag class="search-tag"></tag>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>지역</p>
      <select-box class="select" v-model="selectedSpace" 
        label="전체" :options="spaceArray"></select-box>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>카테고리</p>
      <select-box class="select" v-model="selectedCategory" 
        label="전체" :options="categoryArray"></select-box>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>방문시간</p>
      <div class="visiting-time">
        <vue-timepicker :minute-interval="10" format="HH:mm" 
          v-model="everydayOpen"></vue-timepicker>
      </div>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>체류시간</p>
      <div class="visiting-time">
        <vue-timepicker :minute-interval="10" format="HH:mm" 
          v-model="everydayOpen"></vue-timepicker>
      </div>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>작업환경</p>
      <img class="environment-question" src="@/assets/icon/icon_question.svg" alt="?">
      <toggle-button class="toggle" v-model="outlet" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
    </div>

    <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>주차</p>
      <toggle-button class="toggle" v-model="outlet" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
    </div>

   <div class="horizontal-line"></div>
    <div class="filter-container">
      <p>아메키라노 지수</p>
      <img class="americano-question" src="@/assets/icon/icon_question.svg" alt="?">
    </div>
    <div>
      <div class="slider">
        <v-slider
          v-model="slider.val"
          :thumb-color="slider.thumbColor"
          :color="slider.color"
          :track-color="slider.trackColor"
          min="0"
          max="10000"
          step="1000"
          ticks="always"
          tick-size="1"
          thumb-label="always"
        ></v-slider>
      </div>

   <div class="horizontal-line"></div>
</div>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import SelectBox from '@/components/SelectBox'
  import Tag from '@/components/Tag'
  import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

  export default {
    components: {
      HeaderComponent,
      Tag,
      SelectBox,
      VueTimepicker
    },
    data() {
      return {
        selectedSpace: '',
        selectedCategory: '',
        sameOperationgTime: true,
        spaceArray: [
          {text: '연남', value: '연남'},
          {text: '연희', value: '연희'},
          {text: '서교', value: '서교'},
          {text: '망원', value: '망원'},
          {text: '상수', value: '상수'}
        ],
        categoryArray: [
          {text: '카페', value: '카페'},
          {text: '식당', value: '식당'},
          {text: '주점', value: '주점'},
        ],
        everydayOpen: {
          HH: '10',
          mm: '00'
        },
        slider: { 
          val: 10000, thumbColor: 'red', 
          color: '#000000', trackColor: '#F7F7F7'
        },
      }
    },
    watch: {
      selectedValue(newVal) {
        console.log(newVal);
      }
    },
  }
</script>

<style lang="scss">
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
      p {
        padding: 5px 10px;
      }
      .toggle {
        margin-left: auto;
        margin-top: auto;
      }
      .select {
        margin-left: auto;
        margin-top: auto;
        width: 120px;
      }
      .environment-question {
        padding-top: 2px;
      }
      .americano-question {
        padding-top: 2px;
      }
      .visiting-time {
          margin-right: auto;
          .vue__time-picker .clear-btn {
            align-items: flex-end;
          }
      }
    }
    .slider {
      width: calc(100% - 86px);
      padding-top: 50px;
      .v-application--wrap {
        height: 50px;
        * {
          height: 50px;
        }
      }
    }

  }
</style>