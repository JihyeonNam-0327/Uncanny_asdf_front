
<template>
  <div class="jhj-test-outer">

    <div class="horizontal-line"></div>

    <store-card 
      v-bind:storeCard="storeCards"
      detailInformation
      operatingHourArrow
      addPhotoButton
      @pinChange="pinChange"
      @enlargementChange="enlargementSet"
    ></store-card>
    
    <div class="enlargement-outer" v-if="enlargementToggle" @click="enlargementCancle">
      <div class="enlargement-content">
        <div style="width:100%;margin:0 auto;height:400px">
            <!-- Using the slider component -->
            <slider ref="slider" :options="options">
              <!-- slideritem wrapped package with the components you need -->
              <slideritem v-for="(storeImg, index) in storeCards.storeImgs" :key="index">
                <img style="width: 95%" :src=storeImg>
              </slideritem>
              <!-- Customizable loading -->
              <div slot="loading">loading...</div>
            </slider>
        </div>
      </div>
    </div>

    <detail-filter
      v-bind:storeFilter="storeFilters">
    </detail-filter>

    <div class="horizontal-line"></div>

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
  import StoreCard from '@/components/StoreCard'
  import DetailFilter from '@/components/DetailFilter'
  import { slider, slideritem } from 'vue-concise-slider'

  export default {
    components: {
      StoreCard,
      DetailFilter,
      slider,
      slideritem,
    },
    data() {
      return {
        enlargementToggle: false,
        storeImg: '',
        options: {
          currentPage: 0,
        },
        storeCards: {
          storeNameKor: '앤트러사이트',
          storeBranchKor: '서교',
          category: '카페',
          storeNameEng: 'ANTHRACITE',
          storeBranchEng: 'Seogyo',
          address: '서울 마포구 월드컵로12길 11',
          floor: '1~3층',
          phoneNumber: '02-322-7009',
          openClosed: true,
          closingHour: '22:00',
          holiday: '매주 월요일 휴무',
          openMon: '', 
          closeMon: '',
          openTue: '10:00',
          closeTue: '22:00',
          openWed: '10:00',
          closeWed: '22:00',
          openThu: '10:00',
          closeThu: '22:00',
          openFri: '10:00',
          closeFri: '22:00',
          openSat: '10:00',
          closeSat: '22:00',
          openSun: '10:00',
          closeSun: '22:00',
          seatsCnt: '120',
          reviewCnt: '99',
          pinCnt: '1200',
          distance: '1.2',
          heart: true,
          storeImgs: [
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'        
          ]
        },
        storeFilters:
          ['주차가능', '드라이브스루', '혼밥가능', '애견동반', '주차가능', '드라이브스루', '혼밥가능', '애견동반']
      }
    },
    methods: {
      pinChange: function () {
        this.storeCards.heart = !this.storeCards.heart
      },
      enlargementSet: function (index) {
        this.enlargementToggle = !this.enlargementToggle
        this.options.currentPage = index
      },
      enlargementCancle: function () {
        this.enlargementToggle = !this.enlargementToggle
      },
    }
  }
</script>

<style lang="scss" scoped>
  .jhj-test-outer{

    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }
    .enlargement-outer {
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background-color: rgba( 49, 49, 49, 0.8 );
      display: flex;
      flex-direction: column;
      justify-content: center;
    .menu-collapse {
      outline: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
    }
  }
</style>