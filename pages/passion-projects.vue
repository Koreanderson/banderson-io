<template>
  <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
    <div class="relative max-w-xl">
      <h1>{{ page.title }}</h1>
      <div class="my-10 md:max-w-lg" v-for="project in page.projects" :key="project">
        <h3>{{ project.title }}</h3>
        <div>
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passion Projects',
  transitions: 'page',
  async asyncData({ $content, params, error }) {
    const page = await $content('passion-projects')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      page
    };
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
</style>