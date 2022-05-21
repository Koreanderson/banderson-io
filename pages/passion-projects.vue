<template>
  <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
    <div class="relative max-w-xl">
      <h1>{{ page.title }}</h1>
      <PassionProjectsContent :projects="page.projects" />
    </div>
  </div>
</template>

<script>
import PassionProjectsContent from '../components/PassionProjectsContent.vue';
export default {
    name: "PassionProjects",
    transitions: "page",
    async asyncData({ $content, params, error }) {
        const page = await $content("passion-projects")
            .fetch()
            .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
        });
        return {
            page
        };
    },
    setup() { },
    components: { PassionProjectsContent }
}
</script>

<style lang="scss" scoped>
</style>