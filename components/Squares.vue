<template>
  <div class="squares" :style="squaresStyles">
    <div class="top"></div>
    <div class="middle"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
  export default {
    name: 'Squares',
    props: {
      'size': {
        'type': String,
        'default': '64px'
      },
    },
    computed: {
      squaresStyles() {
        return {
          width: this.size,
          height: this.size
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .squares {
    position: absolute;
    transition-delay: 0.5s;
  }

  .top {
    background-color: $color-green-500;
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 25%;
    animation: fade-up;
    animation-delay: 1.25s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .middle {
    background-color: transparentize($color-green-500, 0.5);
    position: absolute;
    right: 0;
    width: 46%;
    height: 46%;
    top: 15%;
    z-index: 0;
    animation: fade-up;
    animation-duration: 1s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .bottom {
    background-color: $color-green-300;
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 60%;
    height: 60%;
    z-index: -10;
    animation: fade-up;
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
</style>
