
<template>
  <div>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/view-design/dist/styles/iview.css">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to ViewUI</Modal>
  </div>
</template>

<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/view-design/dist/iview.min.js"></script>
<script>
  export default {
    data() {
      return {
          visible: false          
      }
    },
    methods: {
          show: function () {
              this.visible = true;
          }
      }
  }
</script>

<style lang="scss" scoped>

</style>