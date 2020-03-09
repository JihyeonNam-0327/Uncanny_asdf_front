<template>
  <div>
    <header-component leftType="historyBack" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="search"></header-component>
    <header-component leftType="none" centerType="underbar" rightType="home"></header-component>
    <select-box v-model="selectedValue"></select-box>
  
  

    <div class="slider">
      <!-- <v-card-text> -->
        <v-slider
          v-model="slider.val"
          :thumb-color="slider.thumbColor"
          :color="slider.color"
          :track-color="slider.trackColor"
          min="0"
          max="10000"
          step="1000"
          ticks="always"
          tick-size="1"
          thumb-label="always"
        ></v-slider>
      <!-- </v-card-text> -->
    </div>
  
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
      }
    },
    watch: {
      selectedValue(newVal) {
        console.log(newVal);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>