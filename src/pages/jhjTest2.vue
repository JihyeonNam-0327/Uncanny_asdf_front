<template>
  <div class="jhjTest-outer">

    <div class="back-ground"></div>

    <div class="list-outer">
      <SwipeableBottomSheet ref="swipeableBottomSheet">
        <storeCard2
          v-for="(storeCard, index) in storeCards" :key="index"
          v-bind:storeCard="storeCard"
          @pinChange="pinChange(index)">
        </storeCard2>        
      </SwipeableBottomSheet>
    </div>

    <div class="bottom-menu">
      Bottom Menu
    </div>

  </div>
</template>

<script>
  import StoreCard2 from '@/components/StoreCard2'
  import SwipeableBottomSheet from '@/components/SwipeableBottomSheet'
 
  export default {
    components: {
      StoreCard2,
      SwipeableBottomSheet,
    },
    data() {
      return {
        storeCards: [
          {storeNameKor: '앤트러사이트',
          storeBranchKor: '서교',
          category: '카페',
          storeNameEng: 'ANTHRACITE',
          storeBranchEng: 'Seogyo',
          openClosed: true,
          operatingHour: '22:00',
          seatsCnt: '120',
          reviewCnt: '99',
          pinCnt: '1200',
          distance: '1.2',
          heart: true},
          {storeNameKor: '공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          operatingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          operatingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          operatingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          operatingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          operatingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
        ]
      }
    },
    methods: { 
      pinChange: function (index) {
        this.storeCards[index].heart = !this.storeCards[index].heart
      }
    }
  }
</script>
<style lang="scss" scoped>
  .jhjTest-outer {
    .back-ground {
      background-color: #FADADD;
      width: 100vw;
      height: 90vh;
    }
    .bottom-menu {
      position: absolute;
      z-index: 0;

      height: 10vh;
      width: 100vw;

      background-color: gray;
      color: white;
      text-align: center;
    }
  }
</style>