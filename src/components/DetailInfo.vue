<template>
  <div class="store-card-outer">

    <div class="picture-outer">
      <div class="store-img" v-for="(storeImg, index) in storeCard.storeImgs" :key="index">
        <img :src=storeImg @click="enlargementChange(index)">
      </div>
    </div>

    <div class="information-outer">
      <div class="left-part">
        <div class="line1">
          <span class="store-title">{{ storeCard.storeNameKor }} </span> 
          <span>{{ storeCard.category }}</span>
        </div>
        <div class="line2">
          <span>{{ storeCard.storeNameEng }} </span>
        </div>
        <div class="line2-1">
          <div>{{ storeCard.address }}</div>
          <div>
            <span>{{ storeCard.countryNum }}</span>
            <span> - {{ storeCard.middleNum }}</span>
            <span> - {{ storeCard.endNum }}</span>
          </div>
        </div>
        <div>{{ storeCard.url }}</div>
        <div>@{{ storeCard.instagram }}</div>

        <div class="line3">
          <vs-collapse>
            <vs-collapse-item>
              <div slot="header">
                <div v-if="storeCard.openClosed">
                  <span class="open-now">Open Now</span>
                  <span> · 영업 종료 </span>
                  <span>{{ storeCard.closingHour }}</span>
                </div>
                <span class="closed-now" v-else>Closed Now</span>
              </div>

              <div>
                <span class="opertaion-left-title">휴무</span>
                <span>{{ storeCard.holiday }}</span> 
              </div>
              <div class="operation-time-outer"
                v-for="(item, index) in storeCard.weeklyOperationTime" :key="index">
                <span class="opertaion-left-title">{{ item.day }}요일</span>
                <span v-if="item.open.HH && item.close.HH">
                  <span>{{ item.open.HH }} : </span>
                  <span>{{ item.open.mm }} ~</span>
                  <span>{{ item.close.HH }} : </span>
                  <span>{{ item.close.mm }}</span>
                </span>
                <span v-else>
                  휴무
                </span>
              </div>

            </vs-collapse-item>
          </vs-collapse>
        </div>


        <div class="line4">
          <span><img src="@/assets/icon/Icon_seats_cnt.svg"/></span>
          <span> {{ seatsCnt }} · </span>
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
    computed: {
      seatsCnt() {
        let totalNum = 0
        this.storeCard.storeTotalDeskInfo.forEach((item) => {
          if(item.seatNum) {
            totalNum += Number(item.seatNum)
          }
        })
        return totalNum
      }
    },
    methods: {
      pinChange() {
        this.$emit('pinChange')
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
    font-size: .85rem;

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
    }
    .picture-outer::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    .information-outer {
      display: flex;
      padding: 0px 15px 15px 15px;
      .left-part {
        width: calc(100vw - 30px);
        .store-title {
          font-size: 1rem;
          font-weight: bold;
        }
        .line3 {
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          -webkit-tap-highlight-color: transparent;
          .vs-collapse {
            width: 80%;
            padding: 0;
            .vs-collapse-item {
              .vs-collapse-item--header {
                padding: 0;
              }
              .opertaion-left-title {
                  display: inline-block;
                  width: 50px;
              }
            }
          }
          .hearder {
            display: inline-block;
            width: 150px;
          }
          .open-now {
            color: #D02121;
            font-weight: bold;
          }
          .closed-now {
            color: grey;
            font-weight: bold;
          }
          span div div .operating-title[data-v-4fd05711] {
            display: inline-block;
            width: 65px;
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
          font-size: 12px;      
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