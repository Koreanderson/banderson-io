<template>
  <div>
    <div class="my-10 md:max-w-lg" v-for="project in projects" :key="project">
      <h3>{{ project.title }}</h3>
      <div>{{ project.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassionProjectsContent',
  props: {
    'projects': Array,
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
</style>