<template>
  <div class="jhjTest-outer">
    <div class="jhjTest-inner">
      <div class="top-handler">
        <div class="handler"></div>
      </div>

      <div class="list-outer">
        <storeCard2
          v-for="(storeCard, index) in storeCards" :key="index"
          v-bind:storeCard="storeCard"
          @pinChange="pinChange(index)">
        </storeCard2>
      </div>
    </div>
  </div>
</template>

<script>
  import StoreCard2 from '@/components/StoreCard2'
 
  export default {
    components: {
      StoreCard2,
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
        ]
      }
    },
    methods: { 
      // Array.set(Object []array, int index, Object value)
      pinChange: function (index) {
        this.storeCards[index].heart = !this.storeCards[index].heart
      }
    }
  }


</script>
<style lang="scss" scoped>
  .jhjTest-outer {
    background-color: pink;
    .jhjTest-inner {
      background-color: white;
      border-radius: 5% 5% 0% 0%;
      z-index: 1;
      font-size:12px;
      .top-handler {
        display: flex;
        justify-content: center;
        height: 20px;
        .handler {
          margin-top: 10px;
          background-color: #E4E4E4;
          border-radius: 15px;
          width: 37px;
          height: 5px;
        }
      }
    }
  }
</style>