<template>
  <div>

    <basic-map class="map-outer">
    </basic-map>

    <header-component leftType="historyBack" ></header-component>
    <header-component leftType="none" ></header-component>
    <header-component leftType="none" ></header-component>
    <select-box v-model="selectedValue"></select-box>

    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>
    <div @click="openModal">열기22</div>

  



  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import SelectBox from '@/components/SelectBox'
  import BasicMap from '@/components/BasicMap.vue'

  export default {
    components: {
      HeaderComponent,
      SelectBox,
      BasicMap
    },
    craeted() {
      document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
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
      openModal() {
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
      },
      apiTest() {
        let params = { userId: this.userId }
        let token = {}
        this.$api.checkUser(params, token)
        .then(response => {
          console.log(response)
          if(response.status === 200) {
            this.userName = response.data
          }
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .map-outer {
    width: 100%;
    height: 500px;
  }
</style>