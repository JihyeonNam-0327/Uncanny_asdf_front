<template>
  <div>
    <header-component leftType="historyBack" ></header-component>
    <header-component leftType="none" ></header-component>
    <header-component leftType="none" ></header-component>
    <select-box v-model="selectedValue"></select-box>

    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>
    <div @click="openModal">열기22</div>

    <!-- 컴포넌트 MyModal -->
    <MapPageTest @close="closeModal" v-if="modal">
      <!-- default 슬롯 콘텐츠 -->
      <p>내용을 입력하세요</p>
      <div><input v-model="message"></div>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <button @click="doSend">제출</button>
      </template>
      <!-- /footer -->
    </MapPageTest>



  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import SelectBox from '@/components/SelectBox'
  import MapPageTest from '@/components/MapPageTest.vue'

  export default {
    components: {
      HeaderComponent,
      SelectBox,
      MapPageTest,
    },
    data() {
      return {
        modal: false,
        message: '',
        selectedValue: '',
        slider: { 
          val: 10000, thumbColor: 'red', color: '#000000', trackColor: '#F7F7F7'
        },
        userName: '',
        userId: 'USER_ID 01'
      }
    },
    watch: {
      selectedValue(newVal) {
        console.log(newVal);
      }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>