
<template>
  <div class="jhj-test-outer">

    <header-component class="header-component" leftType="historyback" :centerText="storeCard.storeNameKor" @backButtonClick="back"></header-component>

    <div class="horizontal-line"></div>

    <detail-info
      v-bind:storeCard="storeCard"
      @pinChange="pinChange"
      @enlargementChange="enlargementSet"
      @edit="storeInfoEditClicked('UpdateStore')">
    </detail-info>

    <transition name="fade">
      <div class="enlargement-outer" v-if="enlargementToggle">
        <div class="enlargement-content" v-click-outside="enlargementCancel">
          <div style="width:100%;margin:0 auto;height:fit-content;" >
              <!-- Using the slider component -->
              <slider ref="slider" :options="options" >
                <!-- slideritem wrapped package with the components you need -->
                <slideritem v-for="(storeImg, index) in storeCard.storeImgs" :key="index">
                  <img style="width: 95%;" :src=storeImg >
                </slideritem>
                <!-- Customizable loading -->
                <div slot="loading">loading...</div>
              </slider>
          </div>
        </div>
      </div>
    </transition>

    <detail-filter
      v-bind:storeFilter="storeFilters" 
      @edit="filterEditClicked">
    </detail-filter>

    <div class="horizontal-line"></div>

    <detail-menu 
      :signitureMenu="signitureMenu" :wholeMenu="wholeMenu" 
      @edit="menuEditClicked">
    </detail-menu>
  </div>
</template>

<script>
  import DetailInfo from '@/components/DetailInfo'
  import DetailFilter from '@/components/DetailFilter'
  import DetailMenu from '@/components/DetailMenu'
  import { slider, slideritem } from 'vue-concise-slider'
  import HeaderComponent from '@/components/HeaderComponent'

  export default {
    components: {
      HeaderComponent,
      DetailInfo,
      DetailFilter,
      slider,
      slideritem,
      DetailMenu
    },
    data() {
      return {
        enlargementToggle: false,
        storeImg: '',
        options: {
          currentPage: 0,
        },
        storeCard: {
          storeNameKor: '앤트러사이트 서교',
          storeNameEng: 'ANTHRACITE Seogyo',
          category: '카페',
          address: '서울 마포구 월드컵로12길 11 1~3층',
          countryNum: '02',
          middleNum: '1234',
          endNum: '5678',
          url: 'uncanny.asdf.com',
          instagram: 'xoxoinstagram',
          // seatsCnt 연동?
          storeTotalDeskInfo: [ 
            {floor: '지하', floorNum: 1, seatNum: 100},
            {floor: '지상', floorNum: 1, seatNum: 50},
            {floor: '지상', floorNum: 2, seatNum: 100},
            {floor: '지상', floorNum: 3, seatNum: 200},
          ],
          holiday: '매주 월요일',
          weeklyOperationTime: [
            {day: '월', open: {HH: '', mm: ''}, close: {HH: '', mm: ''}},
            {day: '화', open: {HH: '10', mm: '00'}, close: {HH: '24', mm: '00'}},
            {day: '수', open: {HH: '10', mm: '00'}, close: {HH: '24', mm: '00'}},
            {day: '목', open: {HH: '10', mm: '00'}, close: {HH: '24', mm: '00'}},
            {day: '금', open: {HH: '10', mm: '00'}, close: {HH: '24', mm: '00'}},
            {day: '토', open: {HH: '10', mm: '00'}, close: {HH: '24', mm: '00'}},
            {day: '일', open: {HH: '10', mm: '00'}, close: {HH: '23', mm: '00'}}
          ],
          storeImgs: [
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://t1.daumcdn.net/cfile/tistory/993B81465D0F93013C',
            require('@/assets/img/test.png')
          ],

          openClosed: true,
          closingHour: '22:00',
          seatsCnt: '120',
          reviewCnt: '99',
          pinCnt: '1200',
          distance: '1.2',
          heart: true,
        },
        storeFilters: [
          '주차가능', '드라이브스루', '혼밥가능', '애견동반', '단체석', '무료Wi-Fi', '지역상품권', '긴급재난지원금'
        ],
        signitureMenu: [
          {
            name: '피스타치오 프라푸치노',
            price: 6500
          },
          {
            name: '자몽허니블랙티',
            price: 5700
          },
          {
            name: '블랙아인슈페너',
            price: 5900
          }
        ],
        wholeMenu: [
          {
            name: '아메리카노 ICE',
            price: 2500
          },
          {
            name: '카페라떼 ICE',
            price: 3500
          },
          {
            name: '카페모카 ICE',
            price: 3500
          },
          {
            name: '그린티라떼 ICE',
            price: 4000
          },
        ]
      }
    },
    methods: {
      pinChange: function () {
        this.storeCard.heart = !this.storeCard.heart
      },
      enlargementSet: function (index) {
        this.enlargementToggle = !this.enlargementToggle
        this.options.currentPage = index
      },
      enlargementCancel: function () {
        this.enlargementToggle = !this.enlargementToggle
      },
      storeInfoEditClicked() {
        let params = {
          storeCard: this.storeCard
        }
        this.pageMove('UpdateStore', params)
      },
      filterEditClicked() {
        let params = {}
        this.pageMove('UpdateFilter', params) //TEST
      },
      menuEditClicked() {
        let params = {
          signitureMenu: this.signitureMenu, 
          wholeMenu: this.wholeMenu
        }
        this.pageMove('UpdateMenu', params)
      },
      pageMove(where, params) {
        this.$router.push({name: where, params: params})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .jhj-test-outer{
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }
    .enlargement-outer {
      position: absolute;
      z-index: 10;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background-color: rgba( 49, 49, 49, 0.8 );
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>