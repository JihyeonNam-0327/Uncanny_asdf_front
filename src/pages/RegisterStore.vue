<template>
  <div class="register-store-outer">
    <header-component class="header-component" leftType="historyback" centerType="none" rightType="home"></header-component>
    
    <div class="register-store-context">
      <p class="page-desc">아래의 매장 정보로 등록을 요청하게 됩니다.</p>

      <p>상호명(한글)</p>
      <input-box placeHolder="상호명(한글)"></input-box>

      <p>상호명(영문)</p>
      <input-box placeHolder="상호명(영문)"></input-box>

      <p>주소</p>
      <input-box placeHolder="매장 층수가 포함된 주소를 입력해 주세요."></input-box>

      <p>전화번호</p>
      <div class="call-info">
        <input-box placeHolder="02"></input-box>
        <div>-</div>
        <input-box placeHolder="1234"></input-box>
        <div>-</div>
        <input-box placeHolder="5678"></input-box>
      </div>
      
      <p>아메리카노 지수</p>
      <input-box class="price" placeHolder="아메리카노 한 잔 가격을 입력해 주세요."></input-box>

      <p>주차 정보</p>
      <input-box placeHolder="주차 가능/공영 주차장 이용 등 관련 정보를 입력해 주세요."></input-box>

      <div class="toggle-container">
        <p>대관 가능 여부</p>
        <toggle-button class="toggle" v-model="rental" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
      </div>

      <div class="toggle-container">
        <p>와이파이 제공 여부</p>
        <toggle-button class="toggle" v-model="wifi" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
      </div>

      <div class="toggle-container">
        <p>콘센트 유무</p>
        <toggle-button class="toggle" v-model="outlet" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
      </div>

      <div class="toggle-container">
        <p>높은 테이블 유무</p>
        <toggle-button class="toggle" v-model="deskHeight" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
      </div>

      <p>휴무일</p>
      <input-box placeHolder="매주 월요일 휴무/설날 당일 휴무 등 정보를 입력해 주세요."></input-box>

      <p>운영 시간</p>

      <div class="toggle-container">
        <p>매일 동일</p>
        <toggle-button class="toggle" v-model="sameOperationgTime" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>

        <div v-if="sameOperationgTime">

        </div>
        <div v-else>

        </div>
      </div>

      <p>홈페이지 주소</p>
      <input-box placeHolder="www.mycafe.me"></input-box>

      <p>인스타그램 계정</p>
      <input-box placeHolder="asdf_official"></input-box>

      <div class="file-input-container">
        <p>사진 업로드</p>
        <div class="input-with-label">
          <label for="image-upload">추가</label>
          <img src="@/assets/icon/icon_plus_circle.svg"/>
          <input id="image-upload" type="file" accept="image/*" @change="loadFile()" ref="storeImage" multiple>
        </div>
      </div>

      <div class="store-images-container">      
        <div class="store-images" v-for="(item, index) in storeImageArray" :key="index">
          <img class="image" :src="item.src"/>
          <img class="cancel-icon" src="@/assets/icon/icon_cancel.svg" @click="removeItem(item)"/>
        </div>
      </div>

      <basic-button class="register-button" buttonText="등록하기"></basic-button>
    </div>
  </div>
</template>

<script>
  import InputBox from '@/components/InputBox'
  import HeaderComponent from '@/components/HeaderComponent'
  import BasicButton from '@/components/BasicButton'

  export default {
    components: {
      InputBox,
      HeaderComponent,
      BasicButton
    },
    data() {
      return {
        storeImageArray: [],
        rental: false,
        wifi: false,
        outlet: false,
        deskHeight: false,
        sameOperationgTime: false
      }
    },
    methods: {
      loadFile() {
        let storeImages = Array.from(this.$refs.storeImage.files);
        storeImages.forEach((item) => {
          this.storeImageArray.push({item: item, src: URL.createObjectURL(item)})
        })
      },
      removeItem(item) {
        var index = this.storeImageArray.indexOf(item);
        if (index !== -1) {
          this.storeImageArray.splice(index, 1)
        }
      }
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
      position: relative;
      padding-top: 36px;
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
      .toggle-container {
        display: flex;
        .toggle {
          margin-left: auto;
          margin-top: auto;
        }
      }
      .file-input-container {
        display: flex;
        position: relative;
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
            width: 10px;
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
        margin-bottom: 70px;
      }
    }
  }
</style>