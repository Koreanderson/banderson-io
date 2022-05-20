<template>
  <div>
    <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
      <div class="relative max-w-xl">
        <nuxt-content :document="page"/>
        <div v-if="isMobile">
          <ExperienceContent :roles="this.experiencePage.roles"  />
          <div class="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceContent from '../components/ExperienceContent.vue';
  export default {
    name: "IndexPage",
    transition: "page",
    async asyncData({ $content, params, error }) {
        const slug = params.slug || "index";
        const page = await $content(slug)
            .fetch()
            .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
        });
        const experiencePage = await $content("experience")
            .fetch()
            .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
        });
        return {
            page,
            experiencePage,
        };
    },
    data: {
        pageData: {},
    },
    methods: {},
    mounted() {
        console.log("test");
    },
    computed: {
        isMobile() {
            return this.$mq === "sm" || this.$mq === "md";
        }
    },
    components: { ExperienceContent }
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
