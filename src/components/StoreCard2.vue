<template>
  <div class="store-card-outer">

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
          <span class="openNow" v-if="storeCard.openClosed">
          Open Now</span>
          <span class="closedNow" v-else>
          Closed Now</span>
          <span> · 영업 종료 ▶ </span>
          <span>{{ storeCard.operatingHour }}</span>
        </div>
        <div class="line4">
          <span><img src="@/assets/icon/Icon_seats_cnt.svg"/></span>
          <span> {{ storeCard.seatsCnt }} · </span>
          <span><img src="@/assets/icon/Icon_review_cnt.svg"/></span>
          <span> {{ storeCard.reviewCnt }} · </span>
          <span><img src="@/assets/icon/Icon_heart_cnt.svg"/></span>
          <span> {{ storeCard.pinCnt }}</span>
        </div>
      </div>

      <div class="right-part">
        <div class="emoji">
          <div class="emo">🤔<div>10</div></div>
          <div class="emo">😐<div>200</div></div>
          <div class="emo">😊<div>888</div></div>
          <div class="emo">😍<div>1209</div></div>
        </div>
        <div class="distance-pin">
          <span class="distance">{{ storeCard.distance }} km</span>
          <span class="pin" @click="pinChange">
            <span v-if="storeCard.heart">
              <img src="@/assets/icon/Icon_heart_fill_pin.svg"/></span>
            <span v-else>
              <img src="@/assets/icon/Icon_heart_empty_pin.svg"/></span>
            </span>
        </div>
      </div>
    </div>
    <div class="horizontal-line"></div>

  </div>
</template>

<script>
  export default {
    props: {
      storeCard:{
      },
    },
    methods: {
      pinChange() {
        this.$emit('pinChange')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .store-card-outer {
    font-size: 12px;

    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }

    .picture-outer {
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
      padding: 0px 15px 15px 15px;
      .left-part {
        width: 65vw;
        .title {
          font-size: 15px;
        }
        .line3 {
          .openNow {
            color: #D02121;
            font-weight: bold;
          }
          .closedNow {
            color: grey;
          }
        }
        .line4 {
          span {
            img {
              vertical-align: -7%;
            }
          }
        }
      }
      .right-part {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35vw;
        .emoji {
          display: flex;
          justify-content: space-around;
          .emo {
            font-size: 10px;
            text-align: center;
            width: 25px;
            .emoji-temp {
              width: 15px;
              height: 15px;
            }
          }
         }
        .distance-pin {
          display: flex;
          justify-content: flex-end;
          .distance {
            padding: 14px 10px 0px 0px;
          }
        }
      }
    }
  }
</style>