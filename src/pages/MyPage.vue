<template>
  <div class="my-page-outer">
    <HeaderComponent class="header-component"  
      leftType="none" centerType="underbar" rightType="search">
    </HeaderComponent>

    <div class="my-page-contents">
      <p class="welcome">Welcome!</p>
      
      <div class="favorite-contents">
        <div class="favorite-user">{{ nickname }} 님의 즐겨찾기 </div>
        <div class="heart-button-outer">
          <div>
            <img src="@/assets/icon/icon_heart_fill.svg"/>
          </div>
          <div>
            <span>{{ totalCount }}</span>
          </div>
        </div>
      </div>

      <p class="store-apply">매장 등록 요청</p>  
      <p class="store-register">매장 등록 하기</p>  
      <basic-button class="logout-button" buttonText="로그아웃"></basic-button>
    </div>
  </div> 
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import BasicButton from '@/components/BasicButton'

  export default {
    props: {
      nickname: {
        type: String,
        default: '회원'
      },
      totalCount: {
        type: Number,
        default: 0
      },
    },
    components: {
      HeaderComponent,
      BasicButton,
    },
    data() {
      return{
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
   .my-page-outer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      color: #AFAFAF;
      .header-component {
        width: calc(100% - 16px);
        position: absolute;
        top: 36px;
        left: 0px;
      }
      .my-page-contents {
        width: calc(100% - 86px);
        .welcome {
          font-size: 25px;
        }
        .favorite-contents {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 23px;
          .favorite-user{
            margin-left: 20px;
            margin-right: 10px;
            width: 100%;
            text-align: center;
            font-size: 17px;
          }
          .heart-button-outer {
            margin-right: 20px;
            display: flex;
            flex-direction: column;
            height: 46px;
            font-size: 11px;
            img {
              width: 13px;
              margin: auto 0;
            }
            span {
              margin: auto 0;
            }
            div {
              display: flex;
              height: 50%;
              margin: 0 auto;
            }
          }
        }
        .store-apply {
          text-align: center;
          margin: 88px auto 0 auto;
          padding-bottom: 4px;
          width: 90px;
          color: #707070;
          border-bottom: 1px solid #707070;
          font-size: 14px;
        }
        .store-register {
          text-align: center;
          margin: 15px auto 157px auto;
          padding-bottom: 4px;
          width: 90px;
          color: #707070;
          border-bottom: 1px solid #707070;
          font-size: 14px;
        }
      }
    }
</style>