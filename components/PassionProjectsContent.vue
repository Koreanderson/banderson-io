<template>
  <div>
    <div class="mb-10 md:mt-10 md:max-w-lg" v-for="project in projects" :key="project.title">
      <h3>{{ project.title }}</h3>
      <div class="mb-3">{{ project.description }}</div>
      <a :href="project.link" v-if="project.link" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PassionProjects',
    props: {
      'projects': Array,
    },
    setup() {},
  }
</script>

<style lang="scss">
  a {
    display: inline-block;
    position: relative;
    font-weight: 500;

    &:after {
      background-color: $color-green-500;
      transition: .1s linear all;
      content: '';
      display: block;
      width: 100%;
      height: 6px;
      bottom: 3px;
      z-index: -10;
      position: absolute;
    }

    &:hover:after {
      height: 20px;
    }
  }
</style>
