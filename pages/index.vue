<template>
  <div>
    <div class="wrapper relative md:py-20 py-5 mx-auto mb-20 max-w-screen-xl">
      <squares class="absolute top-0 right-0" size="120px" />
      <div class="relative max-w-xl">
        <nuxt-content :document="page"/>
        <div v-if="isMobile">
          <div class="section--experience mt-14">
            <h2 class="highlight">Experience</h2>
            <experience-content :roles="this.experiencePage.roles" />
          </div>
          <div class="section--passion-projects mt-14">
            <h2 class="highlight">Passion Projects</h2>
            <passion-projects-content :projects="this.passionProjectsPage.projects" />
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
      background-color: $color-green-300;
      content: '';
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1.25rem;
      height: 7.75rem;
      width: 11rem;
      z-index: -20;

      @include md {
        display: block;
        top: 0;
        bottom: 0;
        left: -1.25rem;
        width: 13rem;
        height: auto;
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
      bottom: 7px;
      z-index: -10;
      position: absolute;
    }

    &:hover:after {
      height: 20px;
    }
  }

</style>
