<template>
  <div class="jhjTest-outer">
    <div class="list-outer">
      <storeCard
        v-bind:storeCards="[{
        storeNameKor: '앤트러사이트',
        storeBranchKor: '서교점',
        category: '카페',
        storeNameEng: 'ANTHRACITE',
        storeBranchEng: 'Seogyo',
        openClosed: 'true',
        operatingHour: '23:00',
        seatsCnt: '120',
        reviewCnt: '99',
        pinCnt: '1200',
        distance: '1.2',
        heart:'true'},]"
        >
      </storeCard>
    </div>

  </div>
</template>

<script>
  import StoreCard from '@/components/StoreCard'

  export default {
    components: {
      StoreCard,
    },
  }
</script>

<style lang="scss" scoped>
  list-outer {
    z-index: 1;
  }
</style>