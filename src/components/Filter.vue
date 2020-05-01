<template>
  <div class="flter-outer">
    <span>{{filter.category}}</span>
    <img v-if="filter.option.length > 0" src="@/assets/icon/icon_arrow_down.svg" @click="open"/>
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
            option: ['무료', '유료', '발렛', '상관없음'],
            type: 'radio',
            selected: []
          }
        }
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