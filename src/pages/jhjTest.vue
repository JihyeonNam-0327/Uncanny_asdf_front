
<template>
  <div class="jhj-test-outer">

    <div class="horizontal-line"></div>

    <div>??????????사진슬라이더??????????</div>

    <div class="horizontal-line"></div>

    <store-card 
      v-bind:storeCard="storeCards"
      detailInformation
      operatingHourArrow
      @pinChange="pinChange"
    ></store-card>

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

  export default {
    components: {
      StoreCard,
      DetailFilter,
    },
    data() {
      return {
        storeCards:
          {storeNameKor: '앤트러사이트',
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
          heart: true},
        storeFilters:
          ['주차가능', '드라이브스루', '혼밥가능', '애견동반', '주차가능', '드라이브스루', '혼밥가능', '애견동반']
      }
    },
    methods: {
      pinChange: function () {
        this.storeCards.heart = !this.storeCards.heart
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jhj-test-outer{
    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }
    .menu-collapse {
      outline: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
    }
  }
</style>