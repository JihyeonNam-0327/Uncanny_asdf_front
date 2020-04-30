<template>
  <div class="search-filter-tag-outer">
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">카테고리</div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp1"
          v-bind:tagArray="[
            {name:'카페'},
            {name:'차'},
            {name:'디저트'},
            {name:'식당'},
            {name:'주점'},
            {name:'문화'},
            {name:'기타'}
          ]">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">주차정보</div>
      <div class="group-container">
        <filterTag type='radio' 
          groupName="grp2"
          v-bind:tagArray="[
            {name:'주차불가'},
            {name:'무료주차'},
            {name:'유료주차'},
            {name:'무료발렛'},
            {name:'유료발렛'},
         ]">
        </filterTag>
      </div>
      <div class="parking-tip">주차Tip.
        <input type="text" placeholder="ex) 50m이내 공영주차장 이용">
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">유형</div>
      <div class="group-container">
        <filterTag type='checkbox' 
          groupName="grp4"
          v-bind:tagArray="[
            {name:'포장/테이크아웃'},
            {name:'배달가능'},
            {name:'드라이브스루'},
         ]">
        </filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='radio' 
          groupName="grp5"
          v-bind:tagArray="[
            {name:'노키즈존'},
            {name:'유아의자'},
         ]">
        </filterTag>
        <filterTag type='checkbox'
          groupName="grp6"
          v-bind:tagArray="[
            {name:'애견동반'},
         ]">
        </filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">공간</div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp7"
          v-bind:tagArray="[
            {name:'혼밥가능'},
            {name:'단체석'},
            {name:'룸'},
          ]">
        </filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp8"
          v-bind:tagArray="[
            {name:'높은테이블'},
            {name:'콘센트'},
            {name:'무료 Wi-Fi'},
          ]">
        </filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp9"
          v-bind:tagArray="[
            {name:'테라스'},
            {name:'루프탑'},
            {name:'흡연시설'},
          ]">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">Good for</div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp10"
          v-bind:tagArray="[
            {name:'아침'},
            {name:'브런치'},
            {name:'점심'},
            {name:'저녁'},
            {name:'늦은저녁'},
          ]">
        </filterTag>
      </div>
      <div style="padding-bottom:10px;"></div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp11"
          v-bind:tagArray="[
            {name:'디카페인'},
            {name:'비건'},
            {name:'할랄'},
          ]">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">지불</div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp12"
          v-bind:tagArray="[
            {name:'카드불가'},
            {name:'현금불가'},
          ]">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">화장실</div>
      <div class="group-container">
        <filterTag type='radio' 
          groupName="grp13"
          v-bind:tagArray="[
            {name:'내부', id: 'grp1'},
            {name:'외부', id: 'grp1'} 
         ]">
        </filterTag>
        <filterTag type='radio'
        groupName="grp14"
          v-bind:tagArray="[
            {name:'남녀공용', id: 'grp2'},
            {name:'남녀구분', id: 'grp2'}
         ]">
        </filterTag>
      </div>
    </div>
    
    <div class="horizontal-line"></div>

    <div class="group-outer">
      <div class="group-name">기타</div>
      <div class="group-container">
        <filterTag type='checkbox'
          groupName="grp15"
          v-bind:tagArray="[
            {name:'해피아워'},
            {name:'지역상품권 사용가능'},
          ]">
        </filterTag>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div style="padding-bottom:110px;"></div>

    <div class="footer">
      하단
    </div>


  </div>
</template>

<script>
  import FilterTag from '@/components/FilterTag'

  export default {
    components: {
      FilterTag,
    },
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