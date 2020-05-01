<template>
  <div class="store-card-outer">

    <div v-for="(storeCard, index) in storeCards" :key="index">

      <div class="picture-outer">
        <div>pic1</div>
        <div>pic2</div>
        <div>pic3</div>
        <div>pic4</div>
      </div>

      <div class="information-outer">
        <div class="left-part">
          <div class="line1">
            <span class="title">{{ storeCard.storeNameKor }} </span> 
            <span class="title">{{ storeCard.storeBranchKor }} </span> 
            <span>{{ storeCard.category }}</span>
          </div>
          <div class="line2">
            <span>{{ storeCard.storeNameEng }} </span>
            <span>{{ storeCard.storeBranchEng }}</span>
          </div>
          <div class="line3">
            <span>{{ storeCard.openClosed }}</span>
            <span> · 영업종료시간 </span>
            <span>{{ storeCard.operatingHour }}</span>
          </div>
          <div class="line4">
            <span>icon1 </span>
            <span>{{ storeCard.seatsCnt }} · </span>
            <span>icon2 </span>
            <span>{{ storeCard.reviewCnt }} · </span>
            <span>icon3 </span>
            <span>{{ storeCard.pinCnt }}</span>
          </div>
        </div>

        <div class="right-part">
          <div class="Emoji">
            emoji
          </div>
          <div class="distance_pin">
            <span>{{ storeCard.distance }} km</span>
            <span>{{ storeCard.heart }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      storeCards: {
        type: Array,
      },
    }
  }
</script>

<style lang="scss" scoped>
  .store-card-outer {
    border: 1px solid black;
    font-size: 12px;
    .picture-outer {
      border: 1px solid green;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px 15px 10px 15px;
      width: calc(100%-30px);
      :nth-child(n) {
        border: 1px solid black;
        width: 20vw;
        height: 20vw;
      }
    }
    .information-outer {
      display: flex;
      border: 1px solid orange;
      padding: 0px 15px 15px 15px;
      .left-part {
        border: 1px solid red;
        width: 70vw;
        .title {
          font-size: 15px;
        }
      }
      .right-part {
        border: 1px solid blue;        
        width: 30vw;
      }
    }
  }
</style>