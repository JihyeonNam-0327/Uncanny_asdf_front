<template>
  <div class="detail-photo-outer">
    <div v-for="(item, index) in images" :key="index">
      <img :src="item.src" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-photo-outer {
    width: 100%;
    img {
      margin-top: 20px;
      width: 100%;
    }
  }
</style>