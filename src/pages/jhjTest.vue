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
        openClosed: true,
        operatingHour: '23:00',
        seatsCnt: '120',
        reviewCnt: '99',
        pinCnt: '1200',
        distance: '1.2',
        heart: true},]"
        >
      </storeCard>
    </div>

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@1.4.1/dist/vue-ctk-date-time-picker.css">
    <vue-ctk-date-time-picker 
      auto-close
      id="TimePicker" label="Select Time" color="firebrick"
      format="hh:mm a" formatted="hh:mm a" inputSize="sm" minute-interval="10"
      v-model="value">
    </vue-ctk-date-time-picker>
      
  </div>
</template>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-ctk-date-time-picker@1.4.1/dist/vue-ctk-date-time-picker.umd.js" charset="utf-8"></script>
<script>
  import StoreCard from '@/components/StoreCard'
  import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
  import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
 
  export default {
    components: {
      StoreCard,
      VueCtkDateTimePicker,
    },
    data() {
      return {
        value: '',
      }
    },
  }

</script>
<style lang="scss" scoped>

  .jhjTest-outer {
    border: 1px solid black;
    z-index: 1;
    font-size:12px;
  
  }
</style>