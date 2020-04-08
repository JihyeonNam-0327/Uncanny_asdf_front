<template>
  <div class="map-page-outer">

    <div class="header-outer">
      <div class="header-menu">
        <div class="header-select" id="selected">CAFE</div>
        <div class="header-select">RESTAURANT</div>
        <div class="header-select">BAR</div>
        <div class="header-select">PUB</div>
      </div>
      <div class="header-search"><img src="@/assets/icon/icon_search.svg"></div>
    </div>

    <div class="horizontal-line"></div>

    <div class="tag-outer">
      <div class="tag-container">
        <div class="tag-filter" @click="openSelectTime"><tagNew tagName="방문시간" type="select" ></tagNew></div>
        <div class="tag-filter" @click="openSelectTime"><tagNew tagName="작업환경" type="select"></tagNew></div>
        <div class="tag-filter"><tagNew class="tag-filter" tagName="주차" type="toggle"></tagNew></div>  
        <div class="tag-filter"><tagNew class="tag-filter" tagName="애견동반" type="toggle"></tagNew></div>  
        <div class="tag-filter"><tagNew class="tag-filter" tagName="촬영" type="toggle"></tagNew></div>  
        <div class="tag-filter"><tagNew class="tag-filter" tagName="대관" type="toggle"></tagNew></div>  
        <div class="tag-filter" @click="openSelectTime"><tagNew tagName="아메리카노지수" type="select"></tagNew></div>
      </div>
      <div class="tag-control">
        <img src="@/assets/icon/icon_control.svg">
      </div>
    </div>

    <!-- 컴포넌트 MyModal -->
    <MapPageTime @close="closeModal" v-if="modal">
      <!-- default 슬롯 콘텐츠 -->
      <p>Vue.js Modal Window!</p>
      <div><input v-model="message"></div>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <button @click="doSend">제출</button>
      </template>
      <!-- /footer -->
    </MapPageTime>


    <div class="map-outer">
      <naver-maps
        :height="height"
        :width="width"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad">
        <naver-info-window
          class="info-window"
          @load="onWindowLoad"
          :isOpen="info"
          :marker="marker">
          <!-- <div class="info-window-container">
            <h1>{{hello}}</h1>
          </div> -->
        </naver-info-window>
        <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>
        <!-- <naver-circle :lat="37" :lng="127" :radius="88600"/>
        <naver-rectangle :south="36" :north="38" :west="126" :east="128"/>
        <naver-ellipse :bounds="{south:36,north:38,west:126,east:128}"/>
        <naver-polygon :paths="[[{lat:37,lng:127},{lat:38,lng:127},{lat:38,lng:129},{lat:37,lng:128}]]"/>
        <naver-polyline :path="[{lat:37,lng:127},{lat:38,lng:129}]"/>
        <naver-ground-overlay
          :url="'//logoproject.naver.com/img/img_about.gif'"
          :bounds="{south:36.7,north:36.9,west:126.5,east:127.5}"/> -->
      </naver-maps>
    </div>  

  </div>
</template>

<script>
  import TagNew from '@/components/TagNew'
  import MapPageTime from '@/components/MapPageTime'

  export default {
    components: {
      TagNew,
      MapPageTime,
    },
    data() {
      return {
        info: false,
        marker: null,
        count: 1,
        map: null,
        isCTT: false,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 10,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true,
        },
        initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT'],

        modal: false,
        message: '',
        selectedValue: '',
        slider: { 
          val: 10000, thumbColor: 'red', color: '#000000', trackColor: '#F7F7F7'
        },
      }
    },
    watch: {
      selectedValue(newVal) {
        console.log(newVal);
      }
    },
    computed: {
      hello() {
        return `Hello, World! × ${this.count}`;
      },
      width() {
        return window.innerWidth
      },
      height() {
        return window.innerHeight - 136
      }
    },
    methods: {
      onLoad(vue)
      {
        this.map = vue;
      },
      // onWindowLoad(that) {
      // },
      // onMarkerClicked(event) {
      //   this.info = !this.info;
      // },
      onMarkerLoaded(vue) {
        this.marker = vue.marker;
      },

      openSelectTime() {
        this.modal = true
      },
      closeModal() {
      this.modal = false
      },
      doSend() {
        if (this.message.length > 0) {
          alert(this.message)
          this.message = ''
          this.closeModal()
        } else {
          alert('메시지를 입력해주세요.')
        }
      }
    },
    mounted() {
      setInterval(() => this.count++, 1000);
    },
  }
</script>

<style lang="scss" scoped>
  .map-page-outer {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    width: 100%;
    height: 100vh;

    .header-outer {
      display: flex;
      width: calc(100% - 30px);
      height: 36px;
      margin-left: 15px;
      flex-direction: row;
      justify-content: center;
      .header-menu {
        display: flex;
        border-bottom: 1px solid #707070;
        height: 35px;
        .header-select {
          padding: 5px 12px;
          height: 25px;
        }
        #selected {
          font-weight: bold;
          border-bottom: 2px solid black;
        }
      }
      .header-search {
        margin-left: 5px;
        padding: 10px;
        height: 20px;
      }
    }

    .horizontal-line {
      width: 100%;
      height: 1px;
      margin: 10px 0px;
      background-color: #EBEBEB;
    }

    .tag-outer {
      display: flex;
      font-size: 13px;
      margin-left: 15px;
      margin-right: 15px;
      .tag-container {
        display: flex;
        line-height: 27px;
        /* vertical-align: middle; */
        overflow-x: scroll;
        .tag-filter {
          margin-left: 2px;
          margin-right: 2px;
          flex: 0 0 auto;
          border-radius: 6px;
          text-align: center;
          background-color: white;
          img {
            padding: 7px 5px 7px 7px;
            vertical-align: middle;
          }
        }
      }
    .tag-control {
      margin-left: 10px;
      border-radius: 6px;
      border: 1px solid black;
      img {
          vertical-align: middle;
          margin-top: 2px;
          padding: 3px 5px;
        }
      }
    }
    
    .map-outer {
      margin-top: 10px;

      /* .info-window-container {
        padding: 10px;
        width: 300px;
        height: 100px;
      } */
    }
  }
</style>