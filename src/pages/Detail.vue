
<template>
  <div class="jhj-test-outer">

    <div class="horizontal-line"></div>

    <detail-info
      v-bind:storeCard="storeCards"
      @pinChange="pinChange"
      @enlargementChange="enlargementSet"
    ></detail-info>

    <transition name="fade">
      <div class="enlargement-outer" v-if="enlargementToggle">
        <div class="enlargement-content" v-click-outside="enlargementCancel">
          <div style="width:100%;margin:0 auto;height:fit-content;" >
              <!-- Using the slider component -->
              <slider ref="slider" :options="options" >
                <!-- slideritem wrapped package with the components you need -->
                <slideritem v-for="(storeImg, index) in storeCards.storeImgs" :key="index">
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
      v-bind:storeFilter="storeFilters">
    </detail-filter>

    <div class="horizontal-line"></div>

    <detail-menu :signitureMenu="signitureMenu" :wholeMenu="wholeMenu" @edit="menuEditClicked">

    </detail-menu>
  </div>
</template>

<script>
  import DetailInfo from '@/components/DetailInfo'
  import DetailFilter from '@/components/DetailFilter'
  import DetailMenu from '@/components/DetailMenu'
  import { slider, slideritem } from 'vue-concise-slider'

  export default {
    components: {
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
        storeCards: {
          openClosed: true,
          closingHour: '22:00',          

          storeNameKor: '앤트러사이트 서교',
          storeNameEng: 'ANTHRACITE Seogyo',
          category: '카페',
          address: '서울 마포구 월드컵로12길 11',
          floor: '1~3층',
          countryNum: '02',
          middleNum: '1234',
          endNum: '5678',
          storeTotalDeskInfo: [
            {floor: '지하', floorNum: 1, seatNum: 100},
            {floor: '지상', floorNum: 1, seatNum: 50},
            {floor: '지상', floorNum: 2, seatNum: 100},
            {floor: '지상', floorNum: 3, seatNum: 200},
          ],

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
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://t1.daumcdn.net/cfile/tistory/993B81465D0F93013C',
            '@/assets/img/test.png'
          ]
        },
        storeFilters: [
          '주차가능', '드라이브스루', '혼밥가능', '애견동반', '주차가능', '드라이브스루', '혼밥가능', '애견동반'
        ],
        signitureMenu: [
          {
            name: '대표메뉴 1',
            price: 2000
          },
          {
            name: '대표메뉴 2',
            price: 2000
          },
          {
            name: '대표메뉴 3',
            price: 2000
          }
        ],
        wholeMenu: [
          {
            name: '기타메뉴 1',
            price: 2000
          },
          {
            name: '기타메뉴 2',
            price: 2000
          }
        ]
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
      enlargementCancel: function () {
        this.enlargementToggle = !this.enlargementToggle
      },
      menuEditClicked() {
        this.pageMove('UpdateMenu')
      },
      pageMove(where) {
        this.$router.push({name: where, params: {signitureMenu: this.signitureMenu, wholeMenu: this.wholeMenu}})
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