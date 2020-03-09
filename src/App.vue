<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@font-face {
  font-family: 'Mosk Ultra';
  font-style: normal;
  font-weight: normal;
  src: 
    url('./assets/font/Mosk Ultra-Bold 900.woff2') format('woff2'),
    url('./assets/font/MoskUltra-Bold900.woff') format('woff'),
    url('./assets/font/MoskUltra-Bold900.ttf') format('truetype'),
    url('./assets/font/Mosk Ultra-Bold 900.eot') format('embedded-opentype'),
    url('./assets/font/MoskUltra-Bold900.svg') format('svg')
}
html, body {
  font-family: 'Noto Sans KR';
  height: 100%;
  margin: 0;
  padding: 0;
  letter-spacing: -0.4px;
  word-spacing: -1px;
}
#app {
  min-height: 100%;
}
</style>
