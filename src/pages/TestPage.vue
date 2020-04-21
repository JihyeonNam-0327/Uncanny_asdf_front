<template>
  <div>
    <header-component leftType="historyBack" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="home"></header-component>
    <select-box v-model="selectedValue"></select-box>
    <button @click="apiTest">버튼</button>
    <p>{{userName}}</p>
    
  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import SelectBox from '@/components/SelectBox'

  export default {
    components: {
      HeaderComponent,
      SelectBox
    },
    data() {
      return {
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

</style>