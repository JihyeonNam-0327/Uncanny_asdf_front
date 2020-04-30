<template>
  <div class="filter-tag-outer">

    <div class="filter-tag-inner" v-if="type === 'check'">
      <div class="filter-tag-individual" v-for="item in tagArray" :key="item.id">
        <div @click="changeStatus()" :class="item.status">
          {{ item.name }}
          {{ item.status }}
        </div>
      </div>
    </div>

    <div v-else @click="changeStatus()" :class="status">
      {{}}
    </div>
  
  </div>
</template>


<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'check',
      },
      tagArray: {
        type: Array,
      },
    },
    methods: {
      changeStatus() {
        this.item.status === 'inactive' ? 'active' : 'inactive';
      },
    },
  }
</script>


<style lang="scss" scoped>
  .filter-tag-outer {
    .filter-tag-inner {
      display: flex;
      .filter-tag-individual {
        font-size: 13px;
        clear: both;
        float: left;
        .inactive {
          border: 1px solid black;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }
        .active {
          color: white;
          border: 1px solid gray;
          background-color: gray;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }
      }
    }
  }
</style>