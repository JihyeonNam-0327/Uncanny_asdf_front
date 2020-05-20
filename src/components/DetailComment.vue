<template>
  <div class="detail-comment-outer">
    <p class="comment-text">
      Comment
    </p>
    <comment></comment>
  </div>
</template>

<script>
  import Comment from '@/components/Comment';
  export default {
    components: {
      Comment
    }
  }
</script>

<style lang="scss" scoped>
  .detail-comment-outer {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    width: 100%;
    padding: 0px 30px 50px 30px;
    margin-bottom: 45px;
    .comment-text {
      margin: 0;
      font-size: 13px;
      line-height: 19px;
      font-weight: bold;
      color: #404040;
    }
  }
</style>