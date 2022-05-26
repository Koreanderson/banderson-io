<template>
  <div>
    <div class="mb-10 md:mt-10 md:max-w-lg" v-for="project in projects" :key="project">
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
