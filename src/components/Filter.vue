<template>
  <div class="filter-outer" :style="outerClass">
    <div class="filter-category" @click="openOption">
      <span :style="categoryClass">{{filter.category}}</span>
      <img v-if="filter.option.length > 0 && !filter.isOpen" :src="icon"/>
      <img v-if="filter.option.length > 0 && filter.isOpen" :src="icon" class="arrow-up"/>
    </div>
    <div v-if="filter.isOpen" class="divider"></div>
    <div v-if="filter.isOpen" class="filter-option">
      <div v-for="(item, index) in filter.option" :key="index" @click="itemClicked(item)"
      :class="item | optionClass"> {{item.name}} </div>
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
            type: 'selectbox',
            isOpen: false,
            option: [
              {name: '무료', selected: false}, 
              {name: '유료', selected: false}, 
              {name: '발렛', selected: false}
            ]
          }
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      selectedStatus() {
        let status = false
        this.filter.option.forEach(item => {
           if(item.selected) status = true
        })
        return status
      },
      outerClass() {
        if(this.selectedStatus) return 'border-color: #CB2727;'
        else return ''
      },
      categoryClass() {
        if(this.selectedStatus) return 'color: #CB2727;'
        else return ''
      },
      icon() {
        if(this.selectedStatus) return require('@/assets/icon/icon_arrow_down_red.svg')
        else return require('@/assets/icon/icon_arrow_down.svg')
      }
    },
    filters: {
      optionClass(item) {
       if(item.selected) return 'selected-item'
      }
    },
    methods: {
      openOption() {
        this.$emit('categoryClicked')
      },
      itemClicked(selected) {
        let type = this.filter.type
        this.filter.option.forEach(item => {
          if(item.name === selected.name) {
            item.selected = !item.selected
          } else {
            if(type === 'radio') item.selected = false
          }
        })
        this.$emit('input', this.filter)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filter-outer {
    background-color: #ffffff;
    border: 0.5px solid #636363;
    border-radius: 15px;
    width: fit-content;
    text-align: center;
    font-size: 13px;
    line-height: 16px;
    padding: 0px 10px;
    * {
      word-break: keep-all;
      word-wrap: normal;
      white-space: nowrap;
    }
    .filter-category {
      display: flex;
      height: 32px;
      justify-content: center;
      padding: 0px 5px;
      span {
        line-height: 30px;
      }
      img {
        margin-left: 6px;
      }
      .arrow-up {
        transform: rotate(180deg)
      }
    }
    .divider {
      width: 100%;
      height: 0px;
      border: 0.5px solid #DBDBDB;
    }
    .filter-option {
      padding: 0px 5px;
      div {
        margin-top: 9px;
      }
      div:last-child {
        margin-bottom: 10px;
      }
      .selected-item {
        color: #CB2727;
      }
    }
  }
</style>