<template>
  <div class="wrapper relative md:py-20 py-5 mx-auto mb-20 max-w-screen-xl">
    <squares class="absolute top-0 right-0" size="120px" />
    <div class="relative max-w-xl">
      <nuxt-content :document="page"/>
      <ExperienceContent :roles="page.roles" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  transitions: 'page',
  async asyncData({ $content, params, error }) {
    const page = await $content('experience')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      page
    };
  },
  head() {
    return {
      title: 'Experience'
    }
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
  .wrapper {
    &:before {
      background-color: $color-green-300;
      content: '';
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1.25rem;
      height: 7.75rem;
      width: 11rem;
      z-index: -20;
      animation: fade-up;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      opacity: 0;

      @include md {
        display: block;
        top: 0;
        bottom: 0;
        left: -1.25rem;
        width: 13rem;
        height: auto;
      }
    }
  }
</style>
