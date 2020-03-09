<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
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