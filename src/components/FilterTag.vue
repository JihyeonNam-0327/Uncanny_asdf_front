<template>
  <div class="filter-tag-outer">

    <div class="filter-tag-inner" v-if="type === 'check'">
      <div class="filter-tag-individual">
        <div @click="changeStatus()" :class="status">
          {{ tagName }}
        </div>
      </div>

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
      tagName: {
        type: String,
        default: 'check',
      },
      status: {
        type: String,
        default: 'inactive'
      },
    },
    methods: {
      changeStatus() {
        this.status = this.status === 'inactive' ? 'active' : 'inactive';
      },
    },
  }
</script>


<style lang="scss" scoped>
  .filter-tag-outer {
    display: inline-flex;
    .filter-tag-inner {
      .filter-tag-individual {
        font-size: 13px;
        clear: both;
        float: left;
        .inactive {
          color: gray;
          border: 1px solid gray;
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