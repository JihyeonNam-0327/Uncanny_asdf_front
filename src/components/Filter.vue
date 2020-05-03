<template>
  <div class="flter-outer">
    <span>{{filter.category}}</span>
    <img v-if="filter.option.length > 0" src="@/assets/icon/icon_arrow_down.svg" @click="openOption"/>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: Object,
        default () {
          return {
            category: '주차',
            option: [
              {name: '무료', selected: false}, 
              {name: '유료', selected: false}, 
              {name: '발렛', selected: false}, 
              {name: '상관없음', selected: false}
            ],
            type: 'radio',
            selected: []
          }
        }
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      openOption() {
        this.isOpen != this.isOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flter-outer {
    height: 32px;
    width: fit-content;
    padding: 0px 15px;
    border: 0.5px solid #636363;
    border-radius: 15px;
  }
</style>