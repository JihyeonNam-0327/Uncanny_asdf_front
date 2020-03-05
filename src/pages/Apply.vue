<template>
  <div class="apply-page-outer">
    <header-component class="header-component" leftType="historyback" centerType="none" rightType="home"></header-component>
    <div class="apply-contents">
      <div class="apply-notice">
        아래의 매장 정보를 입력해주시면,
        <br />
        검토 후 포스팅 하겠습니다!
      </div>
      <div class="apply-store-name">
        상호명
        <input-box class="store-name" placeHolder="상호명" inputType="text" @inputValue="getStoreName"></input-box>
      </div>
      <div class="apply-address">
        주소
        <input-box class="address" placeHolder="도로명 주소" inputType="text" @inputValue="getAddress"></input-box>
      </div>
      <div class="apply-phone-number">
        전화번호
        <div class="apply-phone-number-input">
          <input-box placeHolder="02" inputType="number" @inputValue="getCountryNum"></input-box>
          <div class="apply-phone-number-hyphen">-</div>
          <input-box placeHolder="1234" inputType="number" @inputValue="getMiddleNum"></input-box>
          <div class="apply-phone-number-hyphen">-</div>
          <input-box placeHolder="5678" inputType="number" @inputValue="getEndNum"></input-box>
        </div>
      </div>
    </div>
    <basic-button class="apply-button" buttonText="신청하기"></basic-button>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import InputBox from '@/components/InputBox'
  import BasicButton from '@/components/BasicButton'

  export default {
    components: {
      HeaderComponent,
      InputBox,
      BasicButton
    },
    data() {
      return {
        storeName: '',
        address: '',
        countryNum: '',
        middleNum: '',
        endNum: '' 
      }
    },
    methods: {
      getStoreName(value) {
        this.storeName = value
      },
      getAddress(value) {
        this.address = value
      },
      getCountryNum(value) {
        this.countryNum = value
      },
      getMiddleNum(value) {
        this.middleNum = value
      },
      getEndNum(value) {
        this.endNum = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .apply-page-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 15px;
    .header-component {
      width: calc(100% - 16px);
      position: absolute;
      top: 36px;
      left: 0px;
    }
    .apply-contents {
      width: calc(100% - 86px);      
      .apply-store-name {
        margin-top: 30px;
      }
      .apply-address {
        margin-top: 10.5px;
      }
      .apply-phone-number {
        margin-top: 10.5px;
        .apply-phone-number-input {
          display: flex;
          .apply-phone-number-hyphen { 
            width: 32px;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .apply-button {
      width: calc(100% - 86px);      
      margin-top: 90.5px;
    }
  }
</style>