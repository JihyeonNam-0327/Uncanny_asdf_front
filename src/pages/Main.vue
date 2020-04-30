<template>
  <div class="main-outer">
    <div class="logo">
      asdf
    </div>
    <agile :initial-slide="3">
      <img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
    </agile>
    <div class="line"></div>

    <div class="store-list-grid" v-for="(item, index) in storeInfo" :key="index">
      <div v-if="index % 2 === 0" class="right-align-grid">
        <p class="place">{{ item.place }}</p>
        <div class="img-name-outer" >
          <img class="store-img" :src="item.pic1" @click="moveToDetail(item.storeId)">
          <div class="name-outer">
            <div @click="moveToDetail(item.storeId)">
              <p class="name">{{ item.nameEng }}</p>
              <p class="copyright">{{ item.copyright }}</p>
            </div>
            <heart-button 
              class="heart-button" 
              :totalCount="item.bookmarkCount"
              v-model="item.bookmark"
              :bookmark="item.bookmark"
              @click="addBookmark(item.storeId)"></heart-button>
          </div>
        </div>
      </div>
      <div v-else class="left-align-grid">
        <div class="img-name-outer">
          <img class="store-img" :src="item.pic1" @click="moveToDetail(item.storeId)">
          <div class="name-outer">
            <div @click="moveToDetail(item.storeId)">
              <p class="name">{{ item.nameEng }}</p>
              <p class="copyright">{{ item.copyright }}</p>
            </div>
            <heart-button 
              class="heart-button" 
              :totalCount="item.bookmarkCount"
              v-model="item.bookmark"
              :bookmark="item.bookmark"
              @click="addBookmark(item.storeId)"></heart-button>
          </div>
        </div>
        <p class="place">{{ item.place }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import HeartButton from '@/components/HeartButton.vue'
  export default {
    components: {
      HeartButton
    },
    data() {
      return {
        storeInfo: [
          {storeId: '1', place: '망원', pic1: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', nameEng: 'ANTHRACITE Seogyo', copyright: '젠스타일의 정원이 돋보이는 카페', bookmarkCount: 150, bookmark: false},
          {storeId: '2', place: '연남', pic1: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', nameEng: 'JIGO', copyright: '따뜻한 원목 느낌이 물씬나는 카페', bookmarkCount: 120, bookmark: false},
          {storeId: '3', place: '서교', pic1: 'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', nameEng: '13책방', copyright: '가정집을 개조한 북카페', bookmarkCount: 273, bookmark: false},
          {storeId: '4', place: '서촌', pic1: 'https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', nameEng: '대충유원지 Inwangsan', copyright: '인왕산의 큰 호랑이, 대충 카페', bookmarkCount: 87, bookmark: false},
          {storeId: '5', place: '가로수길', pic1: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ', nameEng: 'Tailor Coffee', copyright: '테일러 로스팅 랩의 원두를 맛볼 수 있는 직영점', bookmarkCount: 120, bookmark: false}
        ]
      }
    },
    methods: {
      moveToDetail(storeId) {
        /**
         * router 의 params 는 Object 타입으로 작성한다.
         */
        this.$router.push({name: 'Detail', params: {storeId: storeId}})
      },
      addBookmark(storeId) {
        // TODO: userId 와 storeId 저장
        console.log(storeId);
      }
    }
  }
</script>

<style lang="scss">
  .main-outer {
    position: relative;
    width: 100%;
    .logo {
      font-weight: bold;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 25px;
      line-height: 37px;
      letter-spacing: 0;
      color: #707070;
      text-align: center;
      width: 100%;
    }
    .agile {
      &__nav-button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        height: 100%;
        position: absolute;
        top: 0;
        transition-duration: .3s;
        width: 80px;
        &:hover {
          background-color: rgba(#000, .5);
          opacity: 1;
        }
        &--prev {
          left: 0;
        }
        &--next {
          right: 0;
        }
      }
      &__dots {
        bottom: 10px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
      &__dot {
        margin: 0 10px;
        button {
          background-color: transparent;
          border: 1px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          height: 10px;
          font-size: 0;
          line-height: 0;
          margin: 0;
          padding: 0;
          transition-duration: .3s;
          width: 10px;
        }
        &--current,
        &:hover {
          button {
            background-color: #fff
          }
        }
      }
    }
    .slide {
      display: block;
      height: 452px;
      object-fit: cover;
      width: 100%;
    }
    .line {
      position: relative;
      margin-top: 70px;
      margin-bottom: 73px;
      width: 93px;
      height: 0px;
      border: 1px solid #707070;
      opacity: 1;
    }
    .store-list-grid {
      width: 100%;
      .right-align-grid {
        display: flex;
        margin-bottom: 120px;
        .place {
          writing-mode: vertical-lr;
          display: flex;
          align-items: center;
          width: 60px;
          overflow: hidden;
          font-size: 21px;
          font-weight: bold;
          letter-spacing: 0.3em;
        }
        .img-name-outer {
          margin-left: auto;
          .store-img {
            width: 314px;
            height: 392px;
          }
          .name-outer {
            display: flex;
            margin-top: 18.5px;
            .name {
              font-size: 21px;
              font-weight: bold;
              letter-spacing: 0.4px;
            }
            .copyright {
              font-size: 13px;
            }
            .heart-button {
              width: 50px;
              position: relative;
              margin-left: auto;
              border-left: 1px solid #707070;
            }
          }
        }
      }
      .left-align-grid {
        display: flex;
        margin-bottom: 120px;
        .place {
          writing-mode: vertical-lr;
          display: flex;
          align-items: center;
          width: 60px;
          overflow: hidden;
          font-size: 21px;
          font-weight: bold;
          letter-spacing: 0.3em;
        }
        .img-name-outer {
          margin-right: auto;
          .store-img {
            width: 314px;
            height: 392px;
          }
          .name-outer {
            display: flex;
            margin-top: 18.5px;
            .name {
              font-size: 21px;
              font-weight: bold;
              letter-spacing: 0.4px;
              padding-left: 12px;
            }
            .copyright {
              font-size: 13px;
              padding-left: 12px;
            }
            .heart-button {
              width: 50px;
              position: relative;
              margin-left: auto;
              border-left: 1px solid #707070;
            }
          }
        }
        
      }
    }
  }
</style>