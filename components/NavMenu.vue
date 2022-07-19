<template>
  <div class="flex justify-between max-w-screen-xl mx-auto py-10 md:py-20">
    <div class="flex gap-10" v-if="!isMobile">
      <NuxtLink class="text-lg relative" to="/">Hello!</NuxtLink>
      <NuxtLink class="text-lg relative" to="experience">Experience</NuxtLink>
      <NuxtLink class="text-lg relative" to="passion-projects">Passion Projects</NuxtLink>
      <NuxtLink class="text-lg relative" to="about">About</NuxtLink>
    </div>
    <div class="flex justify-end items-center">
      <BellIcon class="icon mr-4" />
      <div>Philadelphia, PA</div>
    </div>
  </div>
</template>

<script>
  import BellIcon from "~/assets/icon--bell.svg?inline";

  export default {
    components: {
      BellIcon
    },
    data() {
      return {
        links: ['/', 'work-samples', 'passion-projects', 'experience'],
      }
    } ,
    computed: {
      isMobile() {
        return this.$mq === "sm" || this.$mq === "md";
      }
    },
  }
</script>

<style lang="scss" scoped>
  a {
    &:after {
      background-color: $color-green-500;
      bottom: 5px;
      content: '';
      display: block;
      height: 0;
      width: 100%;
      position: absolute;
      transition: .1s linear all;
      z-index: -10;
    }

    &:hover:after {
      height: 26px;
    }
  }

  .nuxt-link-exact-active:after {
    bottom: 5px;
    content: '';
    display: block;
    height: 3px;
  }
</style>
