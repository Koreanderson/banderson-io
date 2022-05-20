<template>
  <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
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
  setup() {},
}
</script>