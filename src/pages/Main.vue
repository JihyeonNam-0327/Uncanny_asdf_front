<template>
  <div class="main-outer">
    <div class="logo">
      asdf
    </div>
    <agile :initial-slide="3">
      <img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
    </agile>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .main-outer {
    .logo {
      padding-top: 36px;
      font-weight: bold;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 25px;
      line-height: 37px;
      letter-spacing: 0;
      color: #707070;
      text-align: center;
      width: 100%;
    }
    .agile {
      &__nav-button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        height: 100%;
        position: absolute;
        top: 0;
        transition-duration: .3s;
        width: 80px;
        &:hover {
          background-color: rgba(#000, .5);
          opacity: 1;
        }
        &--prev {
          left: 0;
        }
        &--next {
          right: 0;
        }
      }
      &__dots {
        bottom: 10px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }
      &__dot {
        margin: 0 10px;
        button {
          background-color: transparent;
          border: 1px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          height: 10px;
          font-size: 0;
          line-height: 0;
          margin: 0;
          padding: 0;
          transition-duration: .3s;
          width: 10px;
        }
        &--current,
        &:hover {
          button {
            background-color: #fff
          }
        }
      }
    }
    .slide {
      display: block;
      height: 452px;
      object-fit: cover;
      width: 100%;
    }
    .line {
      position: relative;
      top: 70px;
      width: 93px;
      height: 0px;
      border: 1px solid #707070;
      opacity: 1;
    }
  }
</style>