<template>
  <div class="store-card-outer">

    <div class="picture-outer">
      <div class="store-img" v-for="(storeImg, index) in storeCard.storeImgs" :key="index">
        <img :src=storeImg @click="enlargementChange(index)">
      </div>
      <div class="add-photo-button">
        <img src="@/assets/icon/icon_plus_circle2.svg" alt="">
      </div>
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
        <div class="line2-1">
          <div><span>{{ storeCard.address }}</span><span> {{ storeCard.floor }}</span></div>
          <div>{{ storeCard.phoneNumber }}</div>
        </div>


        <div class="line3">
          <vs-collapse>
            <vs-collapse-item>
              <div slot="header">
                <span class="openNow" v-if="storeCard.openClosed">
                  Open Now</span>
                <span class="closedNow" v-else>
                  Closed Now</span>
                <span v-if="!operatingHourToggle" >
                  <span> · 영업 종료 </span>
                  <span>{{ storeCard.closingHour }}</span>
                </span>
              </div>

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

            </vs-collapse-item>
          </vs-collapse>
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
        <div class="store-card-edit-button" @click="editButtonClicked">
          수정
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
    },
    data() {
      return {
        operatingHourToggle: false,
        enlargement: false,
      }
    },
    methods: {
      pinChange() {
        this.$emit('pinChange')
      },
      operatingHourToggleChange() {
        this.operatingHourToggle = !this.operatingHourToggle
      },
      enlargementChange(index) {
        this.$emit('enlargementChange', index)
      },
      editButtonClicked() {
        this.$emit('edit')
      }
    }
  }
</script>

<style lang="scss">
  .store-card-outer {
    font-size: 12px;

    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }

    .picture-outer {
      display: flex;
      overflow-y: scroll;
      margin: 15px;

      .store-img img {
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        margin-right: 10px;
      }
      .add-photo-button {
        min-width: 100px;
        height: 100px;
        background-color: gray;
        img {
          display: block;
          margin: 35px auto;
       }
      }
    }
    .picture-outer::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    .information-outer {
      display: flex;
      padding: 0px 15px 15px 15px;
      .left-part {
        width: calc(100vw - 30px);
        .title {
          font-size: 16px;
        }
        .line3 {
          font-size: 12px;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          -webkit-tap-highlight-color: transparent;
          .vs-collapse {
            width: 180px;
            padding: 0;
            .vs-collapse-item {
              .vs-collapse-item--header {
                padding: 0;
              }
            }
          }
          .hearder {
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
        .store-card-edit-button {
          align-self: flex-end;        
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