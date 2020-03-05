<!-- ref : https://vuetifyjs.com/en/components/button-groups -->
<!-- ref : https://codepen.io/pen/?&editable=true&editors=101 -->

<template>
  <div>
<div id="app">
  <v-app id="inspire">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="py-2"
        >
          <p>Text Options</p>
  
          <v-btn-toggle
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
          >
            <v-btn value="left">
              Left
            </v-btn>
  
            <v-btn value="center">
              Center
            </v-btn>
  
            <v-btn value="right">
              Right
            </v-btn>
  
            <v-btn value="justify">
              Justify
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
        toggle_exclusive: 2,
        toggle_multiple: [0, 1, 2],
      }
    },
    }
</script>

<style lang="scss" scoped>

</style>