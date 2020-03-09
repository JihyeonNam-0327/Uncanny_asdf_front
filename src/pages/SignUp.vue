<template>
  <div class="sign-up-outer">
    <header-component class="header-component"
      leftType="historyback" centerType="none" rightType="home">
    </header-component>
    <div class="horizontal-line-top"></div>
    <div class="input-email">
      <p>이메일</p>
      <input-box placeHolder="이메일" v-model="email"></input-box>
      <div class="input-email-warning">
        <p class="input-email-warning-text">이미 사용 중인 이메일입니다.</p>
      </div>
    </div>
    <div class="horizontal-line-none"></div>
    <div class="input-nickname">
      <p>닉네임</p>
      <input-box placeHolder="닉네임" v-model="nickname"></input-box>
    </div>
    <div class="horizontal-line"></div>
    <div class="input-password">
      <p>비밀번호</p>
      <input-box placeHolder="비밀번호" v-model="password"></input-box>
      <input-box placeHolder="비밀번호 확인" v-model="passwordChk"></input-box>
      <div class="input-password-warning">
        <p class="input-password-warning-text">비밀번호가 일치하지 않습니다.</p>
      </div>      
    </div>
    <div class="horizontal-line-none"></div>
    <div class="input-gender">
      <p class="input-gender-text">성별</p>
      <v-btn-toggle class="input-gender-radio-button" v-model="gender" group :mandatory="true" color="#37ABDA">
        <v-btn value="w">WOMAN</v-btn>
        <v-btn value="m">MAN</v-btn>
      </v-btn-toggle>
    </div>
    <div class="horizontal-line"></div>
    <div class="input-birthdate">
      <p>생년월일</p>
      <input-box placeHolder="생년월일" inputType="text" v-model="birthDate"></input-box>
    </div>
    <div class="horizontal-line"></div>
    <basic-button class="sign-up-button" buttonText="회원가입"></basic-button>
  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent'
  import InputBox from '../components/InputBox'
  import BasicButton from '../components/BasicButton'

  export default {
    components: {
      HeaderComponent,
      InputBox,
      BasicButton,
    },
    data() {
      return {
        email: '',
        nickname: '',
        password: '',
        passwordChk: '',
        gender: '',
        birthDate: ''
      }
    },
    methods: {}    
  }
</script>

<style lang="scss" scoped>
  .sign-up-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 15px;
    p {
      margin: 0;
    }
    .horizontal-line-top {
      width: 100%;
      height: 1px;
      margin-top: 119px;
      margin-bottom: 18px;
      background-color: #EBEBEB;
    }
    .horizontal-line-none {
      width: 100%;
      height: 1px;
      margin-top: 4px;
      margin-bottom: 18px;
      background-color: #EBEBEB;
    }
    .horizontal-line {
      width: 100%;
      height: 1px;
      margin-top: 21px;
      margin-bottom: 18px;
      background-color: #EBEBEB;
    }    
    .header-component {
      width: calc(100% - 16px);
      position: absolute;
      top: 36px;
      left: 0px;
    }
    .input-email {
      width: calc(100% - 86px);
      .input-email-warning {
        .input-email-warning-text {
          font-size: 11px;
          color: #CC6A6A;
          margin-top: 0;
        }
      }
    }
    .input-nickname {
      width: calc(100% - 86px);
    }
    .input-password {
      width: calc(100% - 86px);
      .input-password-warning{
        .input-password-warning-text {
          font-size: 11px;
          color: #CC6A6A;
          margin-top: 0;
        }
      }
    }
    .input-gender {
      width: calc(100% - 86px);
      display: flex;
      .input-gender-text {
        margin: auto auto auto 0;
      }
      .input-gender-radio-button {
        margin: auto 0 auto auto;
      }
    }
    .input-birthdate {
      width: calc(100% - 86px);
    }
    .sign-up-button {
      width: calc(100% - 86px);
      margin-top: 44px;
      margin-bottom: 40px;
    }
  }
</style>