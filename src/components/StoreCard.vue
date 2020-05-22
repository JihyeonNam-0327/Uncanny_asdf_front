<template>
  <div class="store-card-outer">

    <div class="picture-outer">
      <div class="thumbnail" style="background-image:url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ')"></div>
      <div class="thumbnail" style="background-image:url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ')"></div>
      <div class="thumbnail" style="background-image:url('https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ')"></div>
      <div class="thumbnail" style="background-image:url('https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ')"></div>
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
        <div class="line2-1" v-if="detailInformation">
          <div><span>{{ storeCard.address }}</span><span> {{ storeCard.floor }}</span></div>
          <div>{{ storeCard.phoneNumber }}</div>
        </div>
        <div class="line3">
          <span class='line3-left'>
            <span class="openNow" v-if="storeCard.openClosed">
              Open Now</span>
            <span class="closedNow" v-else>
              Closed Now</span>
            <span v-if="!operatingHourToggle" >
              <span> · 영업 종료 </span>
              <span>{{ storeCard.closingHour }}</span>
            </span>
          </span>
          
          <span v-if="operatingHourArrow">
            <span class="open-button"
              @click="operatingHourToggleChange"
              v-if="!operatingHourToggle">
              <img src="@/assets/icon/icon_arrow_bottom.svg"/></span>
            <span class="close-button"
              @click="operatingHourToggleChange"
              v-if="operatingHourToggle">
              <img src="@/assets/icon/icon_arrow_top.svg"/></span>
              <div v-if="operatingHourToggle">
                <div>
                  <span class="operating-title">휴무</span>
                  <span>{{ storeCard.holiday }}</span>
                </div>
                <div>
                  <span class="operating-title">월요일</span>
                  <span>{{ storeCard.openMon }}</span>
                  <span v-if="storeCard.openMon"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeMon }}</span>
                </div>
                <div>
                  <span class="operating-title">화요일</span>
                  <span>{{ storeCard.openTue }}</span>
                  <span v-if="storeCard.openTue"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeTue }}</span>
                </div>
                <div>
                  <span class="operating-title">수요일</span>
                  <span>{{ storeCard.openWed }}</span>
                  <span v-if="storeCard.openWed"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeWed }}</span>
                </div>
                <div>
                  <span class="operating-title">목요일</span>
                  <span>{{ storeCard.openThu }}</span>
                  <span v-if="storeCard.openThu"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeThu }}</span>
                </div>
                <div>
                  <span class="operating-title">금요일</span>
                  <span>{{ storeCard.openFri }}</span>
                  <span v-if="storeCard.openFri"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeFri }}</span>
                </div>
                <div>
                  <span class="operating-title">토요일</span>
                  <span>{{ storeCard.openSat }}</span>
                  <span v-if="storeCard.openSat"> ~ </span>
                  <span v-else>휴무</span>
                  <span>{{ storeCard.closeSat }}</span>
                </div>
                <div>
                  <span class="operating-title">일요일</span>
                  <span>{{ storeCard.openSun }}</span>
                  <span v-if="storeCard.openSun"> ~ </span>
                  <span v-else>휴무</span>
                <span>{{ storeCard.closeSun }}</span>
                </div>
              </div>
          </span>
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
          <div class="distance">{{ storeCard.distance }} km</div>
          <div class="pin" @click="pinChange">
            <div class="pin-img" v-if="storeCard.heart">
              <img src="@/assets/icon/Icon_heart_fill_pin.svg"/></div>
            <div class="pin-img" v-else>
              <img src="@/assets/icon/Icon_heart_empty_pin.svg"/></div>
          </div>
        </div>
      </div>
    </div>
    <div class="horizontal-line"></div>

  </div>
</template>

<script>
  export default {
    props: {
      storeCard: {
      },
      operatingHourArrow: {
        type: Boolean,
        default: false
      },
      detailInformation: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        operatingHourToggle: false
      }
    },
    methods: {
      pinChange() {
        this.$emit('pinChange')
      },
      operatingHourToggleChange() {
        this.operatingHourToggle = !this.operatingHourToggle
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
      padding: 15px;
      :nth-child(n) {
        width: 20vw;
        height: 20vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    .information-outer {
      display: flex;
      padding: 0px 15px 15px 15px;
      .left-part {
        width: 60vw;
        .title {
          font-size: 15px;
        }
        .line3 {
          .line3-left {
            display: inline-block;
            width:150px;
          }
          .openNow {
            color: #D02121;
            font-weight: bold;
          }
          .closedNow {
            color: grey;
            font-weight: bold;
          }
          span div div .operating-title[data-v-4fd05711] {
            display: inline-block;
            width: 65px;
          }
          .open-button {
            padding: 0px 10px 0px 10px;
          }
          .close-button {
            padding: 0px 10px 0px 10px;
          }
        }
        .line4 {
          padding-top:2px;
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
        width: 30vw;
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
          .pin {
            .pin-img {
              display: flex;
            }
          }
        }
      }
    }
  }
</style>