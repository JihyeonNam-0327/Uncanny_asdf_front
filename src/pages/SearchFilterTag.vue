<template>
  <div class="search-filter-tag-outer">

    <header-component class="header-component" leftType="historyback" centerText="필터 검색"></header-component>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">방문시간</div>  
      <date-time-picker-modal
        :startDate = "startDate" 
        :endDate = "endDate"
        :singleDate = "false" 
        @onChange = "onChange"
      />
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">좌석수</div>
       ~~이상 ~~ 이하
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">카테고리</div>
      <div class="group-container">
        <filterTag type='checkbox'
          v-bind:tagArray="[
            {name:'카페', selected: true},
            {name:'차', selected: true},
            {name:'디저트', selected: false},
            {name:'식당', selected: false},
            {name:'주점', selected: false},
            {name:'문화', selected: false},
            {name:'기타', selected: false}
          ]"
          v-model="categories">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">주차정보</div>
      <div class="group-container">
        <filterTag type='radio' 
          groupName="parking"
          v-bind:tagArray="[
            {name:'주차불가', selected: false},
            {name:'무료주차', selected: false},
            {name:'유료주차', selected: true},
            {name:'무료발렛', selected: false},
            {name:'유료발렛', selected: false},
         ]"
         v-model="parking">
        </filterTag>
      </div>
      <div class="parking-tip">주차Tip.
        <input type="text" placeholder="ex) 50m이내 공영주차장 이용" v-model="parkingTip">
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">유형</div>
      <div class="group-container">
        <filterTag type='checkbox' 
          v-bind:tagArray="[
            {name:'포장/테이크아웃', selected: false},
            {name:'배달가능', selected: false},
            {name:'드라이브스루', selected: false},
            {name:'애견동반', selected: false},
         ]"
         v-model="deliveryType">
        </filterTag>
        <filterTag type='radio' 
          groupName="kids"
          v-bind:tagArray="[
            {name:'노키즈존', selected: false},
            {name:'유아의자', selected: false},
         ]"
         v-model="kids">
        </filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">공간</div>
      <div class="group-container">
        <filterTag type='checkbox'
          v-bind:tagArray="[
            {name:'혼밥가능', selected: false},
            {name:'단체석', selected: false},
            {name:'룸', selected: false},
            {name:'높은테이블', selected: false},
            {name:'콘센트', selected: false},
            {name:'무료 Wi-Fi', selected: false},
            {name:'테라스', selected: false},
            {name:'루프탑', selected: false},
            {name:'흡연시설', selected: false}
          ]"
          v-model="spaceType">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">Good for</div>
      <div class="group-container">
        <filterTag type='checkbox'
          v-bind:tagArray="[
            {name:'아침', selected: false},
            {name:'브런치', selected: false},
            {name:'점심', selected: false},
            {name:'저녁', selected: false},
            {name:'늦은저녁', selected: false},
            {name:'디카페인', selected: false},
            {name:'비건', selected: false},
            {name:'할랄', selected: false},
          ]"
          v-model="goodFor">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">지불</div>
      <div class="group-container">
        <filterTag type='checkbox'
          v-bind:tagArray="[
            {name:'카드불가', selected: false},
            {name:'현금불가', selected: false},
            {name:'카카오페이가능', selected: false},
            {name:'네이버페이가능', selected: false}
          ]"
          v-model="payInfo">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">화장실</div>
      <div class="group-container">
        <filterTag type='radio' 
          groupName="toiletLocation"
          v-bind:tagArray="[
            {name:'내부', selected: false},
            {name:'외부', selected: false} 
         ]"
         v-model="toiletLocation">
        </filterTag>
        <filterTag type='radio'
        groupName="toiletGender"
          v-bind:tagArray="[
            {name:'남녀공용', selected: false},
            {name:'남녀구분', selected: false}
         ]"
         v-model="toiletGender">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">기타</div>
      <div class="group-container">
        <filterTag type='checkbox'
          v-bind:tagArray="[
            {name:'해피아워', selected: false},
            {name:'지역상품권 사용가능', selected: false},
          ]"
          v-model="etcInfo">
        </filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div style="padding-bottom:110px;"></div>

  <footer>
    <div class="footer-button">
      필터 적용하기
    </div>
  </footer>

  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import FilterTag from '@/components/FilterTag'
  import { DateTimePickerModal } from "@lazy-copilot/datetimepicker";
  import '@lazy-copilot/datetimepicker/dist/datetimepicker.css'

export default {
    components: {
      HeaderComponent,
      FilterTag,
      DateTimePickerModal,
    },
    data() {
      return {
        startDate: new Date("2020-05-13T00:03"),
        endDate: new Date("2020-05-13T23:29"),

        value: '',
        parkingTip: '',
        categories: [],
        parking: '',
        deliveryType: [],
        kids: '',
        spaceType: [],
        goodFor: [],
        payInfo: [],
        toiletLocation: '',
        toiletGender: '',
        etcInfo: []
      }
    },
    watch: { 
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .search-filter-tag-outer {
    display: flex;
    flex-direction: column;
    height: 100%;

        input[type=radio] {
          display:none; 
          margin:10px;
        }
        input[type=radio] + label {
          display:inline-block;
          padding: 4px 12px;
          background-color: #e7e7e7;
          border-color: #ddd;
        }
        input[type=radio]:checked + label { 
          background-image: none;
          background-color:#d0d0d0;
        }


    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }

    .group-outer {
      font-size: 13px;
      margin: 15px;
      width: calc(100%-30px);
      .group-name { 
        font-weight: bold;
        padding-bottom: 15px;
      }
      .group-container {
        display: flex;
        overflow-x: scroll;
        div {
          flex: 0 0 auto;
        }
      }
      .parking-tip {
        margin-top: 15px;
        input {
          margin-left:10px;
          border: none;
          width: 200px;
        }
      }
    }

    footer { 
      position:fixed; 
      left:0px; 
      bottom:0px; 
      height:110px; 
      width:100%; 
      background:white;
      color: white; 
      background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 2%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 2%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

      .footer-button {
        border: 0px;
        border-radius: 15px;
        background:#3C3C3C;
        text-align: center;
        vertical-align: middle;
        margin: 30px 20px 0px 20px;
        line-height: 50px;
      }
    }
  }
</style>