<template>
  <div class="jhjTest-outer">

    <div class="back-ground"></div>

    <div class="list-outer">
      <SwipeableBottomSheet ref="swipeableBottomSheet">
        <storeCard
          v-for="(storeCard, index) in storeCards" :key="index"
          v-bind:storeCard="storeCard"
          @pinChange="pinChange(index)">
        </storeCard>
      </SwipeableBottomSheet>
    </div>

    <div class="bottom-menu">
    </div>

  </div>
</template>

<script>
  import StoreCard from '@/components/StoreCard'
  import SwipeableBottomSheet from '@/components/SwipeableBottomSheet'
 
  export default {
    components: {
      StoreCard,
      SwipeableBottomSheet,
    },
    data() {
      return {
        storeCards: [
          {storeNameKor: '1앤트러사이트',
          storeBranchKor: '서교',
          category: '카페',
          storeNameEng: 'ANTHRACITE',
          storeBranchEng: 'Seogyo',
          openClosed: true,
          closingHour: '22:00',
          seatsCnt: '120',
          reviewCnt: '99',
          pinCnt: '1200',
          distance: '1.2',
          heart: true},
          {storeNameKor: '2공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          closingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '3공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          closingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '4공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          closingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '5공그로트',
          storeBranchKor: '연남',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          closingHour: '24:00',
          seatsCnt: '80',
          reviewCnt: '200',
          pinCnt: '999',
          distance: '0.6',
          heart: true},
          {storeNameKor: '6인생카페',
          storeBranchKor: '종착지',
          category: '카페',
          storeNameEng: 'Gongrot',
          storeBranchEng: 'YeonNam',
          openClosed: true,
          closingHour: '24:00',
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
      z-index: 1;
      height: 10vh;
      width: 100vw;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+8 */
      background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 8%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 8%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 8%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
    }
  }
</style>