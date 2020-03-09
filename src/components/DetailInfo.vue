<template>
  <div class="detail-info-outer">
    <p class="bold">상호명</p>
    <p>{{ storeInfo.nameKor }} / {{ storeInfo.nameEng }}</p>
    <p class="bold">주소</p>
    <p>{{ storeInfo.address }}</p>
    <p class="bold">전화번호</p>
    <p>{{ storeInfo.countryNum }} - {{ storeInfo.middleNum }} - {{ storeInfo.endNum }}</p>

    <div class="line"></div>

    <table class="table-basic">
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_coffee.svg"/></td>
        <td class="title">아메리카노지수</td>
        <td class="contents">{{ storeInfo.americanoIndex | priceFilter }}</td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_chair.svg"/></td>
        <td class="title">좌석수</td>
        <td class="contents">{{ storeInfo.totalDesk }}</td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_parking.svg"/></td>
        <td class="title">주차</td>
        <td class="contents"><img v-if="storeInfo.parking" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_flag.svg"/></td>
        <td class="title">대관 여부</td>
        <td class="contents"><img v-if="storeInfo.rental" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
    </table>

    <div class="line"></div>

    <p class="bold">작업환경</p>

    <table>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_wifi.svg"/></td>
        <td class="title">와이파이</td>
        <td class="contents"><img v-if="storeInfo.wifi" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_outlet.svg"/></td>
        <td class="title">콘센트</td>
        <td class="contents"><img v-if="storeInfo.outlet" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_cube.svg"/></td>
        <td class="title">공간감</td>
        <td class="contents"><img v-if="storeInfo.space" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_height.svg"/></td>
        <td class="title">테이블높이</td>
        <td class="contents"><img v-if="storeInfo.deskHeight" src="@/assets/icon/icon_true.svg"/><img v-else src="@/assets/icon/icon_false.svg" /></td>
      </tr>
    </table>

    <div class="line"></div>

    <div class="operation-time-text">
      <p class="bold">운영시간</p>
      <span class="holiday">{{ storeInfo.holiday }}</span>
    </div>


    <table class="operation-time-table">
      <tr>
        <td></td>
        <td>월</td>
        <td>화</td>
        <td>수</td>
        <td>목</td>
        <td>금</td>
        <td>토</td>
        <td>일</td>
      </tr>
      <tr>
        <td>open</td>
        <td>{{ storeInfo.openMon }}</td>
        <td>{{ storeInfo.openTue }}</td>
        <td>{{ storeInfo.openWed }}</td>
        <td>{{ storeInfo.openThu }}</td>
        <td>{{ storeInfo.openFri }}</td>
        <td>{{ storeInfo.openSat }}</td>
        <td>{{ storeInfo.openSun }}</td>
      </tr>
      <tr>
        <td>close</td>
        <td>{{ storeInfo.closeMon }}</td>
        <td>{{ storeInfo.closeTue }}</td>
        <td>{{ storeInfo.closeWed }}</td>
        <td>{{ storeInfo.closeThu }}</td>
        <td>{{ storeInfo.closeFri }}</td>
        <td>{{ storeInfo.closeSat }}</td>
        <td>{{ storeInfo.closeSun }}</td>
      </tr>
    </table>

    <div class="line"></div>

    <table>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_globe.svg"/></td>
        <td class="title-short">URL</td>
        <td class="contents long">{{ storeInfo.URL | textFilter}}</td>
      </tr>
      <tr>
        <td class="icon"><img src="@/assets/icon/icon_instagram.svg"/></td>
        <td class="title-short">instagram</td>
        <td class="contents long">{{ storeInfo.instagram }}</td>
      </tr>
    </table>

    <div class="map">
      <div id="map" style="width:100%;height:400px;"></div>
    </div>
  </div>
</template>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID&callback=CALLBACK_FUNCTION"></script>
<script>
  export default {
    props: {
      storeInfo: {
        type: Object,
        default: () => {
          return {
            nameKor: '상호명 앤트러사이트서교',
            nameEng: 'Anthracite Seogyo',
            address: '주소 서울 마포구 월드컵로12길 11 1층~3층',
            countryNum: '02',
            middleNum: '322',
            endNum: '7009',
            americanoIndex: 4500,
            totalDesk: 30,
            parking: false,
            rental: false,
            wifi: true,
            outlet: true,
            space: true,
            deskHeight: true,
            holiday: '매주 월요일 휴무',
            openMon: '10:00',
            closeMon: '22:00',
            openTue: '10:00',
            closeTue: '22:00',
            openWed: '10:00',
            closeWed: '22:00',
            openThu: '10:00',
            closeThu: '22:00',
            openFri: '10:00',
            closeFri: '22:00',
            openSat: '10:00',
            closeSat: '22:00',
            openSun: '10:00',
            closeSun: '22:00',
            URL: '',
            instagram: '@pouringlg_outl'
          }
        }
      }
    },
    filters: {
      priceFilter(val) {
        let num = new Number(val);
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + " 원"
      },
      textFilter(val) {
        if(val) {
          return val
        } else {
          return '-'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-info-outer {
    width: 100%;
    padding: 20px 30px 0px 30px;
    table {
      padding:0; 
      border-spacing:0px; 
      border:0; 
      border-collapse:collapse;
      font-size: 13px;
      line-height: 21px;
      width: 100%;
      .icon {
        width: 25px;
        text-align: center;
      }
      .title {
        width: 155px;
      }
      .title-short {
        width: 70px;
      }
      .contents {
        width: auto;
      }
    }
    p {
      font-size: 13px;
      line-height: 21px;
      padding-left: 5px;
    }
    .bold {
      font-weight: bold;
    }
    .line {
      width: 100%;
      height: 0px;
      border: 0.5px solid #C3C3C3;
      margin: 12px auto;
    }
    
    .operation-time-text {
      display: flex;
      p {
        margin-right: auto;
      }
      .holiday {
        text-align: right;
        margin-left: auto;
        font-size: 13px;
        line-height: 21px;
        letter-spacing: 0;
        color: #DB2E2F;
      }
    }
    .operation-time-table {
      margin-top: 5px;
      text-align: center;
      background: #F7F7F794 0% 0% no-repeat padding-box;
    }
    .map {
      margin-top: 25px;
    }
  }
</style>