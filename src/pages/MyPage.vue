<template>
  <v-app id="inspire">
        <v-select
          :items="items"
          :menu-props="{ top: false, offsetY: true }"
          label="Label"
        ></v-select>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        items: ['Foo', 'Bar', 'Fizz', 'Buzz']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>