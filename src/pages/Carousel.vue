<template>
<!-- Make a div wrapped slider,set height and width -->
<div class="enlargement-outer">
  <div class="enlargement-content">
    <div style="width:100%;margin:0 auto;height:400px">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(storeImg, index) in storeCards.storeImgs" :key="index">
            <img style="width: 95%" :src=storeImg>
          </slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
    </div>
  </div>
</div> 
</template>
<script>
  import { slider, slideritem } from 'vue-concise-slider'

  export default {
    components: {
      slider,
      slideritem
    },
    data () {
      return {
        options: {
          currentPage: 0,
        },
        storeCards: {
          storeNameKor: '앤트러사이트',
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
          heart: true,
          storeImgs: [
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', 
            'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'        
          ]
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  .enlargement-outer {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba( 49, 49, 49, 0.5 );
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>