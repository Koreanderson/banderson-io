<template>
  <div>
    <div class="wrapper relative py-20 mx-auto mb-20 max-w-screen-xl ">
      <div class="relative max-w-xl">
        <nuxt-content :document="page"/>
        <div class="mt-10" v-if="isMobile">
          <div class="section--experience">
            <h2>Experience</h2>
            <ExperienceContent :roles="this.experiencePage.roles"  />
          </div>
          <div class="section--passion-projects">
            <h2>Passion Projects</h2>
            <PassionProjectsContent :projects="this.passionProjectsPage.projects"  />
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
        const passionProjectsPage = await $content("passion-projects")
            .fetch()
            .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
        });
        return {
            page,
            experiencePage,
            passionProjectsPage,
        };
    },
    data: {
        pageData: {},
    },
    methods: {},
    mounted() {
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
  .wrapper {
    &:before {
      content: '';
      display: block;
      position: absolute;
      background-color: $color--primary;
      left: -1.25rem;
      top: 0;
      width: 13rem;

      @include md {
        left: -1.25rem;
        top: 0;
        width: 13rem;
      }
    }
  }

  h1 {
    @include md {
      margin-bottom: 20px;
    }
  }

  h2 {
    font-size: 26px;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 10px;
  }

</style>
