<template>
  <div class="flex justify-between max-w-screen-xl mx-auto py-20">
    <div class="flex gap-10">
      <nuxt-link class="text-lg relative" to="/">About</nuxt-link>
      <nuxt-link class="text-lg relative" to="experience">Experience</nuxt-link>
      <nuxt-link class="text-lg relative" to="passion-projects">Passion Projects</nuxt-link>
    </div>
    <div class="flex justify-end">
      <div>Philadelphia, PA</div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  setup() {
    const links = ['/', 'work-samples', 'passion-projects', 'experience'];
  },
}
</script>

<style lang="scss" scoped>
  a:hover,
  .nuxt-link-exact-active {
    &:after {
      content: '';
      display: block;
      background-color: $color--primary;
      height: 12px;
      position: absolute;
      top: 10px;
      width: 100%;
      z-index: -10;
    }
  }

</style>
