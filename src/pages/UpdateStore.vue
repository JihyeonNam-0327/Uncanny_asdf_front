<template>
  <div class="register-store-outer">
    <header-component class="header-component" leftType="historyback" centerText="기본정보 수정" @backButtonClick="back"></header-component>
    
    <div class="register-store-context">

      <p>상호명(한글)</p>
      <input-box placeHolder="상호명(한글)" v-model="storeInfo.nameKor"></input-box>

      <p>상호명(영문)</p>
      <input-box placeHolder="상호명(영문)" v-model="storeInfo.nameEng"></input-box>

      <p>주소</p>
      <input-box placeHolder="매장 층수가 포함된 주소를 입력해 주세요." v-model="storeInfo.address"></input-box>

      <p>전화번호</p>
      <div class="call-info">
        <input-box placeHolder="02" v-model="storeInfo.countryNum"></input-box>
        <div>-</div>
        <input-box placeHolder="1234" v-model="storeInfo.middleNum"></input-box>
        <div>-</div>
        <input-box placeHolder="5678" v-model="storeInfo.endNum"></input-box>
      </div>

      <!-- 고정된 필드 -->
      <div class="store-floor-info">
        <div class="desc">
          <p>매장 층</p>
          <p>좌석 수</p>
          <p>(총 좌석수: {{storeInfo.totalDeskNum}})</p>
        </div>
        <div class="total-desk-info" v-for="(item, index) in storeInfo.storeTotalDeskInfo" :key="index">
          <div class="select-box-outer">
            <select-box v-model="item.floor" :options="storeInfo.floorInfo"></select-box>
          </div>
          <input-box class="floor-num" placeHolder="숫자만" inputType="number" v-model="item.floorNum"></input-box>
          <input-box class="desk-num" placeHolder="좌석수" inputType="number" v-model="item.deskNum"></input-box>
          <img v-if="index === 0" @click="plusFloorInfo" src="@/assets/icon/icon_plus_circle.svg"/>
          <img v-else @click="minusFloorInfo(item)" src="@/assets/icon/icon_minus_circle.svg"/>
        </div>
      </div>

      <p>휴무일</p>
      <input-box placeHolder="매주 월요일 휴무/설날 당일 휴무 등 정보를 입력해 주세요." v-model="storeInfo.holiday"></input-box>

      <p>운영 시간</p>

      <div class="toggle-container">
        <p>매일 동일</p>
        <toggle-button class="toggle" v-model="storeInfo.sameOperationgTime" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
      </div>

      <div v-if="storeInfo.sameOperationgTime" class="operation-time">
        <div class="am">
          <vue-timepicker :minute-interval="10" format="HH:mm" v-model="storeInfo.everydayOpen"></vue-timepicker>
        </div>
        <div class="bar">
          -
        </div>
        <div class="pm">
          <vue-timepicker :minute-interval="10" format="HH:mm" v-model="storeInfo.everydayClose"></vue-timepicker>
        </div>
      </div>
      <div v-else class="operation-time multiple">
        <div v-for="(item, index) in storeInfo.weeklyOperationTime" :key="index" class="time">
          <p>{{item.day}}</p>
          <div class="am">
            <vue-timepicker :minute-interval="10" format="HH:mm" v-model="item.open"></vue-timepicker>
          </div>
          <div class="bar">
            -
          </div>
          <div class="pm">
            <vue-timepicker :minute-interval="10" format="HH:mm" v-model="item.close"></vue-timepicker>
          </div>
        </div>
      </div>

      <p>홈페이지 주소</p>
      <input-box placeHolder="www.mycafe.me" v-model="storeInfo.url"></input-box>

      <p>인스타그램 계정</p>
      <input-box placeHolder="asdf_official" v-model="storeInfo.instagram"></input-box>

      <div class="file-input-container">
        <p>사진 업로드</p>
        <div class="input-with-label">
          <label for="image-upload">추가</label>
          <img src="@/assets/icon/icon_plus_circle.svg"/>
          <input id="image-upload" type="file" accept="image/*" @change="loadFile()" ref="storeImage" multiple>
        </div>
      </div>

      <div class="store-images-container">      
        <div class="store-images" v-for="(item, index) in storeInfo.storeImageArray" :key="index">
          <img class="image" :src="item.src"/>
          <img class="cancel-icon" src="@/assets/icon/icon_cancel.svg" @click="removeItem(item)"/>
        </div>
      </div>

      <basic-button class="register-button" buttonText="수정하기"></basic-button>
    </div>
  </div>
</template>

<script>
  import InputBox from '@/components/InputBox'
  import SelectBox from '@/components/SelectBox'
  import HeaderComponent from '@/components/HeaderComponent'
  import BasicButton from '@/components/BasicButton'
  import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

  export default {
    components: {
      InputBox,
      HeaderComponent,
      BasicButton,
      VueTimepicker,
      SelectBox
    },
    created() {
      // 이전 페이지에서 넘겨주는 값
      // this.storeInfo = this.$route.params.storeInfo
    },
    data() {
      return {
        storeInfo: {
          storeImageArray: [],
          rental: false,
          wifi: false,
          outlet: false,
          deskHeight: false,
          sameOperationgTime: true,
          nameKor: '',
          nameEng: '',
          address: '',
          countryNum: '',
          middleNum: '',
          endNum: '',
          americanoIndex: '',
          parking: '',
          holiday: '',
          url: '',
          instagram: '',
          everydayOpen: {
            HH: '10',
            mm: '00'
          },
          everydayClose: {
            HH: '22',
            mm: '00'
          },
          weeklyOperationTime: [
            {day: '월', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '화', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '수', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '목', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '금', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '토', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}},
            {day: '일', open: {HH: '10', mm: '00'}, close: {HH: '22', mm: '00'}}
          ],
          floorInfo: [{text: '지상', value: '지상'}, {text: '지하', value: '지하'}],
          // floor: '지상',
          storeTotalDeskInfo: [
            {floor: '지상', floorNum: 0, deskNum: 0}
          ]
        }
      }
    },
    computed: {
      totalDeskNum() {
        let totalNum = 0
        this.storeInfo.storeTotalDeskInfo.forEach((item) => {
          totalNum += Number(item.deskNum)
        })
        return totalNum
      }
    },
    methods: {
      loadFile() {
        let storeImages = Array.from(this.$refs.storeImage.files);
        storeImages.forEach((item) => {
          this.storeInfo.storeImageArray.push({item: item, src: URL.createObjectURL(item)})
        })
      },
      removeItem(item) {
        var index = this.storeImageArray.indexOf(item);
        if (index !== -1) {
          this.storeInfo.storeImageArray.splice(index, 1)
        }
      },
      plusFloorInfo() {
        if(this.storeInfo.storeTotalDeskInfo.length > 3) return
        this.storeInfo.storeTotalDeskInfo.push({floor: '지상', floorNum: 0, deskNum: 0})
      },
      minusFloorInfo(item) {
        var index = this.storeInfo.storeTotalDeskInfo.indexOf(item);
        if (index !== -1) {
          this.storeInfo.storeTotalDeskInfo.splice(index, 1)
        }
      },
      back() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="scss">
  .register-store-outer {
    position: relative;
    width: 100%;
    height: 100vh;
    .header-component {
      width: calc(100% - 16px);
    }
    .register-store-context {
      padding: 0 31px;
      p {
        font-size: 15px;
        line-height: 22px;
        color: #707070;
        margin: 16px 0px 0px 0px;
      }
      .input-box {
        font-size: 13px;
      }
      .input-box::placeholder {
        font-size: 13px;
      }
      .page-desc {
        font-size: 13px;
        line-height: 19px;
      }
      .call-info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        div {
          margin: auto 5px;
        }
        .input-box-outer {
          width: 100%;
        }
      }
      .price {
        position: relative;
      }
      .price:before {
        position: absolute;
        content: "₩";
        right: 12px;
        top: 8px;
      }
      .store-floor-info {
        .desc {
          display: flex;
          width: 100%;
          p {
            /* flex-basis: 50%; */
          }
          p:first-child {
            width: 45%;
          }
          p:last-child {
            float: left;
          }
        }
        .total-desk-info {
          display: flex;
          width: 100%;
          .select-box-outer {
            width: calc((100%-70px)*0.21);
            margin-top: auto;
          }
          .floor-num {
            margin-top: auto;
            width: calc((100%-70px)*0.22);;
            margin-left: 10px;
            margin-right: 10px;
          }
          .desk-num {
            margin-top: auto;
            width: calc((100%-70px)*0.55);
            margin-left: 10px;
            margin-right: 10px;
          }
          img {
            margin: auto;
            position: relative;
            top: 4px;
          }
        }
      }
      .toggle-container {
        display: flex;
        .toggle {
          margin-left: auto;
          margin-top: auto;
        }
      }
      .multiple {
        flex-direction: column;
      }
      .operation-time {
        width: 100%;
        position: relative;
        display: flex;
        .time {
          display: flex;
          margin-top: 5px;
          span, input {
            width: 100px !important;
          }
          p {
            margin: auto 20px auto 10px;
          }
          .am {
            width: 100px;
            margin-right: 15px;
          }
          .pm {
            width: 100px;
            margin-left: 15px;
          }
        }
        .dash {
          width: 10px;
          padding: 0 15px;
          margin: auto 0;
        }
        .am {
          width: 140px;
          margin-right: auto;
          .vue__time-picker .clear-btn {
            align-items: flex-end;
          }
        }
        .pm {
          width: 140px;
          margin-left: auto;
          .vue__time-picker .clear-btn {
            align-items: flex-end;
          }
        }
        input {
          border: 0;
          outline: none;
          width: 140px;
          border-bottom: 1px solid #404040;
        }
        span {
          width: 140px;
        }
      }
      .file-input-container {
        display: flex;
        position: relative;
        margin-top: 15px;
        width: 47px;
        height: 36px;
        overflow: hidden;
        width: 100%;
        justify-content: stretch;
        p {
          width: 90px;
          margin: auto 0;
        }
        .input-with-label {
          cursor:pointer;
          margin-left: auto;
          display: flex;
          label {
            display: inline-block;
            color: #707070;
            margin: auto 0;
          }
          img {
            margin: auto 0;
            padding-top: 2px;
            padding-left: 8px;
            width: 20px;
          }
          input[type="file"] {
            outline: none;
            border: 0;
            position:absolute;
            right:0px;
            top:0px;
            height: 36px;
            width: 45px;
            opacity:0;
            filter: alpha(opacity=0);
            -ms-filter: alpha(opacity=0);
          }
        }
      }
      .store-images-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-x: scroll;
        .store-images {
          position: relative;
          width: 96px;
          height: auto;
          margin: 8px;
          .image {
            width: 96px;
          }
          .cancel-icon {
            position: absolute;
            top: -2px;
            right: -2px;
            z-index: 2;
            background-color: #FFFFFF;
            border-radius: 50%;
          }
        }
      }
      .register-button {
        width: 100%;
        margin-top: 25px;
        margin-bottom: 70px;
      }
    }
  }
</style>