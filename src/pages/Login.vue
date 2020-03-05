<template>
  <div class="login-page-outer">
    <header-component class="header-component" leftType="historyback" centerType="underbar" rightType="search"></header-component>
    <div class="contents-container">
      <input-box class="email-input" placeHolder="이메일" inputType="text" @inputValue="getEmail" ></input-box>
      <input-box class="password-input"  placeHolder="비밀번호" inputType="password" @inputValue="getPassword"></input-box>
      <div class="auto-login">
        <input id="auto-login-tag" type="checkbox" v-model="autoLogin"/>
        <label for="auto-login-tag" >자동로그인</label>
      </div>
      <basic-button buttonText="로그인"></basic-button>
      <p class="sign-up-button">
        이메일로 회원가입하기
      </p>
      <p class="apply-button">
        매장 등록 요청
      </p>
    </div>
  </div>
</template>

<script>
  import InputBox from '../components/InputBox'
  import BasicButton from '../components/BasicButton'
  import HeaderComponent from '@/components/HeaderComponent'

  export default {
    components: {
      InputBox,
      BasicButton,
      HeaderComponent
    },
    data() {
      return {
        email: '',
        password: '',
        autoLogin: true
      }
    },
    methods: {
      getEmail(value) {
        this.email = value
      },
      getPassword(value) {
        this.password = value
      }
    }

  }
</script>

<style lang="scss" scoped>
  .login-page-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    .header-component {
      width: calc(100% - 16px);
      position: absolute;
      top: 36px;
      left: 0px;
    }
    .contents-container {
      width: calc(100% - 86px);
      .email-input {
        margin-bottom: 10px;
      }
      .password-input {
        margin-bottom: 10px;
      }
      .auto-login {
        label {
          margin-left: 7px;
        }
        margin-bottom: 40px;
      }
      .sign-up-button {
        text-align: center;
        margin: 135px auto 0 auto;
        padding-bottom: 4px;
        width: 141px;
        color: #707070;
        border-bottom: 1px solid #707070;
        font-size: 14px;
      }
      .apply-button {
        text-align: center;
        
        margin: 12px auto 0 auto;
        padding-bottom: 4px;
        width: 90px;
        color: #707070;
        border-bottom: 1px solid #707070;
        font-size: 14px;

      }
    }
  }
</style>