<template>
  <div class="detail-outer">
    <header-component class="header-component" leftType="historyback" centerType="underbar" rightType="search"></header-component>
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
    <detail-photo id="photo"></detail-photo>
    <detail-info id="info"></detail-info>
    <detail-comment id="comment"></detail-comment>
  </div>
</template>

<script>
  import DetailPhoto from '@/components/DetailPhoto.vue'
  import DetailInfo from '@/components/DetailInfo.vue'
  import DetailComment from '@/components/DetailComment.vue'
  import HeaderComponent from '@/components/HeaderComponent'

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
      HeaderComponent
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
        nameEng: 'ANTHRACITE Seogyo'
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
    .header-component {
      width: calc(100% - 16px);
      position: relative;
      margin-top: 36px;
      margin-bottom: 23px;
    }
    .asdf-logo {
      width: 375px;
      height: 375px;
      overflow: hidden;
      position: relative;
      text-align: center;
      img {
        width: 100%;
      }
      .text-over-img {
        z-index: 1;
        .asdf {
          position: absolute;
          left: 180px;
          font-size: 60px;
          color: #FFFFFF;
        }
        .bottom-text {
          .asdf-desc {

          }
          .store-info {

          }
        }
      }
    }
    .tab-index {
      position: relative;
      margin-top: 787.5px;
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