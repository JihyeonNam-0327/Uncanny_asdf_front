<template>
  <div class="filter-tag-outer">

    <div class="filter-tag-inner" v-if="type === 'radio'">
      <div class="filter-tag-individual" v-for="(item, index) in tagArray" :key="index">
        <input type="radio" :id="item.name" :name="groupName" value="item.name">
        <label :for="item.name">{{ item.name }}</label>
      </div>
    </div>

    <div class="filter-tag-inner" v-else>
      <div class="filter-tag-individual" v-for="item in tagArray" :key="item.id">
        <input type="checkbox" :id="item.name" :name='groupName' value="item.name">
        <label :for="item.name">{{ item.name }}</label>
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
      tagArray: {
        type: Array,
      },
      groupName: {
        type: String,
        default: ''
      }
    },
  }
</script>


<style lang="scss" scoped>
  .filter-tag-outer {

    .filter-tag-inner {
      display: flex;
      .filter-tag-individual {

        input[type=radio] {
          display:none; 
        }
        input[type=radio] + label {
          display:inline-block;
          color: grey;
          border: 1px solid grey;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }
        input[type=radio]:checked + label { 
          color: white;
          border: 1px solid gray;
          background-color: gray;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }

        input[type=checkbox] {
          display:none; 
        }
        input[type=checkbox] + label {
          display:inline-block;
          color: grey;
          border: 1px solid grey;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }
        input[type=checkbox]:checked + label { 
          color: white;
          border: 1px solid gray;
          background-color: gray;
          border-radius: 20px;
          padding: 10px 13px 10px 13px;
          margin-right: 5px;
        }


        font-size: 13px;
        clear: both;
        float: left;
        .inactive {
          border: 1px solid grey;
        }
        .active {
          color: white;
          border: 1px solid gray;
          background-color: gray;

        }
      }
    }
  }
</style>