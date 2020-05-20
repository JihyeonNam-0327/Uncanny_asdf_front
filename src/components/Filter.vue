<template>
  <div class="flter-outer">
    <div class="filter-category" @click="openOption">
      <span>{{filter.category}}</span>
      <img v-if="filter.option.length > 0 && !isOpen" src="@/assets/icon/icon_arrow_down.svg"/>
      <img v-if="filter.option.length > 0 && isOpen" src="@/assets/icon/icon_arrow_down.svg" class="arrow-up"/>
    </div>
    <div v-if="isOpen && filter.type === 'radio'" class="filter-option">
      <div v-for="(item, index) in filter.option" :key="index"> {{item.name}} </div>
    </div>
    <div v-if="isOpen && filter.type === 'selectbox'" class="filter-option">
      <div v-for="(item, index) in filter.option" :key="index"> {{item.name}} </div>
    </div>
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
        isOpen: true
      }
    },
    methods: {
      openOption() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flter-outer {
    height: 32px;
    width: fit-content;
    height: fit-content;
    text-align: center;
    padding: 0px 15px;
    border: 0.5px solid #636363;
    border-radius: 15px;
    .filter-category {
      display: flex;
      justify-content: center;
      span {
        line-height: 30px;
      }
      img {
        margin-left: 4px;
      }
      .arrow-up {
        transform: rotate(180deg)
      }
    }
    .filter-option {
      div {
        margin-top: 3px;
      }
      div:first-child {
        margin-top: 0px;
      }
      div:last-child {
        padding-bottom: 5px;
      }
    }
  }
</style>