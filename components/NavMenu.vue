<template>
  <div class="flex gap-10 mx-auto max-w-screen-lg">
    <nuxt-link to="experience">Experience</nuxt-link>
    <nuxt-link to="work-samples">Work Samples</nuxt-link>
    <nuxt-link to="passion-projects">Passion Projects</nuxt-link>
    <a href="https://github.com/koreanderson">Github</a>
  </div>
</template>

<script>
export default {
  setup() {
    const links = ['/', 'work-samples', 'passion-projects', 'experience'];
  },
}
</script>