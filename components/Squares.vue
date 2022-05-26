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
  $color--primary: #BEEED2;
  $color--secondary: #E9FFF2;

  .squares {
    position: absolute;
  }

  .top {
    background-color: $color--primary;
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 25%;
  }

  .middle {
    background-color: transparentize($color--primary, 0.5);
    position: absolute;
    right: 0;
    width: 46%;
    height: 46%;
    top: 15%;
    z-index: 0;
  }

  .bottom {
    background-color: $color--secondary;
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 60%;
    height: 60%;
    z-index: -10;
  }
</style>