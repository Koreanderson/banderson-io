<template>
  <div>
    <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
      <div class="relative max-w-xl">
        <nuxt-content :document="page"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'page',

  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }

}
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    letter-spacing: 1px;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    line-height: 32px;
  }

</style>
