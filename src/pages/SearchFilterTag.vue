<template>
  <div class="search-filter-tag-outer">
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">카테고리</div>
      <div class="group-container">
        <filterTag type='check' tagName='카페'></filterTag>
        <filterTag type='check' tagName='차'></filterTag>
        <filterTag type='check' tagName='디저트'></filterTag>
        <filterTag type='check' tagName='식당'></filterTag>
        <filterTag type='check' tagName='주점'></filterTag>
        <filterTag type='check' tagName='문화'></filterTag>
        <filterTag type='check' tagName='기타'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">주차정보</div>
      <div class="group-container">
        <filterTag type='check' tagName='주차불가'></filterTag>
        <filterTag type='check' tagName='무료주차'></filterTag>
        <filterTag type='check' tagName='유료주차'></filterTag>
        <filterTag type='check' tagName='무료발렛'></filterTag>
        <filterTag type='check' tagName='유료발렛'></filterTag>
      </div>
      <div class="parking-tip">주차Tip.<input type="text" placeholder="ex) 50m이내 공영주차장 이용"></div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">유형</div>
      <div class="group-container">
        <filterTag type='check' tagName='포장/테이크아웃'></filterTag>
        <filterTag type='check' tagName='배달가능'></filterTag>
        <filterTag type='check' tagName='드라이브스루'></filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='check' tagName='노키즈존'></filterTag>
        <filterTag type='check' tagName='유아의자'></filterTag>
        <filterTag type='check' tagName='애견동반'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">공간</div>
      <div class="group-container">
        <filterTag type='check' tagName='혼밥가능'></filterTag>
        <filterTag type='check' tagName='단체석'></filterTag>
        <filterTag type='check' tagName='룸'></filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='check' tagName='높은테이블'></filterTag>
        <filterTag type='check' tagName='콘센트'></filterTag>
        <filterTag type='check' tagName='무료 Wi-Fi'></filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='check' tagName='테라스'></filterTag>
        <filterTag type='check' tagName='루프탑'></filterTag>
        <filterTag type='check' tagName='흡연시설'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">Good for</div>
      <div class="group-container">
        <filterTag type='check' tagName='아침'></filterTag>
        <filterTag type='check' tagName='브런치'></filterTag>
        <filterTag type='check' tagName='점심'></filterTag>
        <filterTag type='check' tagName='저녁'></filterTag>
        <filterTag type='check' tagName='늦은저녁'></filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='check' tagName='디카페인'></filterTag>
        <filterTag type='check' tagName='디저트'></filterTag>
        <filterTag type='check' tagName='비건'></filterTag>
        <filterTag type='check' tagName='할랄'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">지불</div>
      <div class="group-container">
        <filterTag type='check' tagName='카드불가'></filterTag>
        <filterTag type='check' tagName='현금불가'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">화장실</div>
      <div class="group-container">
        <filterTag type='check' tagName='내부'></filterTag>
        <filterTag type='check' tagName='외부'></filterTag>
        <filterTag type='check' tagName='남녀공용'></filterTag>
        <filterTag type='check' tagName='남녀구분'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">기타</div>
      <div class="group-container">
        <filterTag type='check' tagName='해피아워'></filterTag>
        <filterTag type='check' tagName='지역상품권 사용가능'></filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>


    <div>
      <filterTagNew type='check' 
      v-bind:tagArray="[
        {id: 1, name:'남여공용', status:'inactive' },
        {id: 2, name:'남녀구분', status:'inactive'}
      ]">
      </filterTagNew>
    </div>


    <div class="footer">
      하단
    </div>


  </div>
</template>

<script>
  import FilterTag from '@/components/FilterTag'
  import FilterTagNew from '@/components/FilterTagNew'

  export default {
     components: {
      FilterTag,
      FilterTagNew,
    },
  }
</script>

<style lang="scss" scoped>
  .search-filter-tag-outer {
    display: flex;
    flex-direction: column;
    height: 100%;

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

      .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 6rem;
      }
    }
  }
</style>