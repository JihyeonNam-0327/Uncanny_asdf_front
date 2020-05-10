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
            <div class="emo"><img src="@/assets/icon/Icon_heart_cnt.svg"/><div>10</div></div>
            <div class="emo"><img src="@/assets/icon/Icon_heart_cnt.svg"/><div>200</div></div>
            <div class="emo"><img src="@/assets/icon/Icon_heart_cnt.svg"/><div>888</div></div>
            <div class="emo"><img src="@/assets/icon/Icon_heart_cnt.svg"/><div>1209</div></div>
          </div>
          <div class="distance_pin">
            <span>{{ storeCard.distance }} km</span>
            <span @click="pinChange">
              {{ storeCard.heart }}
              <span v-if="storeCard.heart">
                <img src="@/assets/icon/Icon_heart_fill_pin.svg"/></span>
              <span v-else>
                <img src="@/assets/icon/Icon_heart_empty_pin.svg"/></span>
              </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      storeCards:{
        type: Array
      },
      pin: {
        type: Boolean,
        default: false,
      },
    },
    
    methods: {
      pinChange() {
        this.$emit('heart', !storeCard.heart)
      }
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
        border: 1px solid blue;
        width: 35vw;
        .emoji {
          display: flex;
          justify-content: space-around;
          border: 3px solid black;
          .emo {
            border: 1px solid black;
            font-size: 10px;
            text-align: center;
            width: 25px;
            img {
              margin-left: auto;
              margin-right: auto;       
            }
            .emoji-temp {
              width: 15px;
              height: 15px;
            }
          }

         }
        .distance_pin {
          border: 3px solid purple;
        }
      }
    }
  }
</style>