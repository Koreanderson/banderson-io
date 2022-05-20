<template>
  <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
    <div class="relative max-w-xl">
      <nuxt-content :document="page"/>
      <div class="my-10" v-for="role in page.roles" :key="role.company">
        <h3>{{ role.company }}</h3>
        <div class="flex justify-between">
          <h6>{{ role.title }}</h6>
          <div class="h6">{{ role.duration }}</div>
        </div>
      </div>
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
      console.log(page)
    return {
      page
    };
  },
  setup() {},
}
</script>