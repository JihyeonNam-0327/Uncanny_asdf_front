<template>
  <div class="detail-outer">
    <header-component class="header-component" id="header" leftType="historyback" centerType="underbar" rightType="search"></header-component>
    
    <div class="asdf-logo">
      <img src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
      <div class="text-over-img">
        <div class="asdf">
          ASDF
        </div>
        <div class="bottom-text">
          <div class="asdf-desc">
            <p>ADVISE</p>
            <p>SUITABLE</p>
            <p>DRINK&amp;</p>
            <p>FOOD</p>
          </div>
          <div class="store-info">
            <p>ISSUE NO.{{ storeId }}</p>
            <p>{{ nameEng }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="posting-info">
      <p class="issue">ISSUE NO.{{ storeId }}</p>
      <p class="name">{{ nameEng }}</p>
      <p class="place">{{ place }}</p>
      <div class="line"></div>
      <div class="date">
        <p>Visit. {{ visitDate }}</p>
        <p>Post. {{ postingDate }}</p>
      </div>
    </div>

    <div class="bottom-heart-outer">
      <heart-button class="heart-button" v-model="bookmarkClicked" :bookmark="true" :totalCount="27"></heart-button>
    </div>

    <v-tabs class="tab-index"
      v-model="tab"
      id="tabIndex"
      grow
      :height="30">
      <v-tab
        v-for="(item, index) in tabs"
        :key="index"
        v-scroll-to="item.anchor"
        @change="changeTab(index)">
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <detail-photo id="photo" :images="storePics"></detail-photo>
    <detail-info id="info"></detail-info>
    <detail-comment id="comment"></detail-comment>
  </div>
</template>

<script>
  import DetailPhoto from '@/components/DetailPhoto.vue'
  import DetailInfo from '@/components/DetailInfo.vue'
  import DetailComment from '@/components/DetailComment.vue'
  import HeaderComponent from '@/components/HeaderComponent'
  import HeartButton from '@/components/HeartButton'

  export default {
    created() {
      console.log(this.$route.params);
      this.storeId = this.$route.params.storeId
      window.addEventListener('scroll', this.handleScroll);
    },
    components: {
      DetailPhoto,
      DetailInfo,
      DetailComment,
      HeaderComponent,
      HeartButton
    },
    mounted() {
    },
    data() {
      return {
        storeId: '',
        tab: null,
        tabs: [
          {id: 1, name: 'photo', anchor: { el: '#photo', offset: -30 }},
          {id: 2, name: 'info', anchor: { el: '#info' , offset: -30 }},
          {id: 3, name: 'comment', anchor: { el: '#comment' , offset: -30 } }
        ],
        nameEng: 'ANTHRACITE Seogyo',
        place: '망원',
        visitDate: '2020.02.26.',
        postingDate: '2020.03.07.',
        bookmark: true,
        bookmarkClicked: false,
        storePics: [
          {src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'},
          {src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'}
        ]
      }
    },
    methods: {
      changeTab(index) {
        console.log('tab clicked', index);
        if(index === 0) {
          // scroll to anchor 1
        } else if (index === 1) {
          // scroll to anchor 2
        } else if (index === 2) {
          // scroll to anchor 3
        }
      },
      handleScroll () {
        if(window.scrollY < 790) {
          document.getElementById('tabIndex').removeAttribute('style')
          document.getElementById('tabIndex').style.position = 'relative'
        } else {
          document.getElementById('tabIndex').style.position = 'sticky'
          document.getElementById('tabIndex').style.top = 0
        }

        if(window.scrollY >= 790 && window.scrollY < 1288) {
          this.tab = 0
        } else if (window.scrollY >= 1288 && window.scrollY < 1788) {
          this.tab = 1
        } else if (window.scrollY >= 1788) {
          this.tab = 2
        }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
  .detail-outer {
    position: relative;
    p {
      margin: 0 !important;
    }
    .header-component {
      width: calc(100% - 16px);
      position: relative;
      margin-bottom: 23px;
      z-index: 2;
      background-color: #FFFFFF;
    }
    .asdf-logo {
      width: 100%;
      height: 375px;
      overflow: hidden;
      position: relative;
      text-align: center;
      img {
        width: 100%;
        height: 375px;
      }
      .text-over-img {
        z-index: 1;
        color: #FFFFFF;
        .asdf {
          font-family: 'Mosk Ultra';
          position: absolute;
          top: 0px;
          left: 50%;
          font-size: 65px;
          font-weight: 900;
          transform: translate(-50%, 0%);
          letter-spacing: -3.2px;
        }
        .bottom-text {
          width: 100%;
          display: flex;
          position: absolute;
          top: 0px;
          height: 100%;
          .asdf-desc {
            margin: auto auto 17px 12px;
            text-align: left;
            font-size: 12px;
            line-height: 15px;
            font-weight: bold;
          }
          .store-info {
            margin: auto 12px 17px auto;
            text-align: right;
            p:first-child {
              font-size: 15px;
              line-height: 15px;
              letter-spacing: 0;
            }
            p {
              font-size: 25px;
              font-weight: bold;
              line-height: 25px;
              letter-spacing: 0.2px;
            }
          }
        }
      }
    }
    .posting-info {
      margin-top: 50px;
      margin-bottom: 10px;
      padding-left: 27px;
      padding-right: 15px;
      text-align: left;
      font-size: 15px;
      color: #343434;
      line-height: 19px;
      .issue {
      }
      .name {
        font-size: 25px;
        font-weight: bold;
        line-height: 37px;
      }
      .place {
        font-weight: bold;
      }
      .date {
        font-size: 13px;
        color: #404040;
        text-align: right;
      }
      .line {
        width: 0px;
        height: 76px;
        border: 1px solid #707070;
        opacity: 1;
        margin-top: 35px;
        margin-bottom: 25px;
      }
    }
    .bottom-heart-outer {
      z-index: 200;
      display: flex;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #D0D0D0;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 45px;
      .heart-button {
        width: 16px;
        height: 30px;
        margin: auto 21px auto auto;
      }
    }
    .tab-index {
      position: relative;
      background-color: white;
      border-bottom: 1px solid grey;
      z-index: 1;
      div {
        text-transform: lowercase;
      }
    }
    .contents {

    }
  }
</style>