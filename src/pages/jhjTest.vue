
<template>
  <div>
    <div>사진 슬라이더?</div>
    <div>===========================================</div>
    <storeCard 
      v-bind:storeCard="storeCards"
      detailInformation
      operatingHourArrow
      @pinChange="pinChange"
    ></storeCard>


  </div>
</template>

<script>
  import StoreCard from '@/components/StoreCard'

  export default {
    components: {
      StoreCard,
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
          heart: true}
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

</style>