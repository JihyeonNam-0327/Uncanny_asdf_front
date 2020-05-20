
<template>
  <div>
    <storeCard v-bind:storeCard="storeCards"
    operatingHourArrow
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
          heart: true}
        }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>