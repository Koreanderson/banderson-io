<template>
  <div>
    <div class="wrapper relative md:py-20 py-5 mx-auto mb-20 max-w-screen-xl">
      <Squares class="absolute top-0 right-0 delay" size="120px" />
      <div class="flex gap-40 flex-col md:flex-row">
        <div class="relative max-w-xl">
          <NuxtContent :document="page"/>
        </div>
        <div>
          <h2 class="mt-4 mb-4">My Current...</h2>
          <ul>
            <li><strong>Hobbies:</strong> Cooking, Traveling, Eating</li>
            <li><strong>Spirit Animal:</strong> 🦊</li>
            <li><strong>Pokemon:</strong> <img class="w-5 inline-flex relative bottom-1" src="~assets/gengar.png" /> Gengar</li>
            <li><strong>VS Code Theme:</strong> Noctis Minimus</li>
            <li><strong>Keyboard:</strong> 🔭 Zoom 65 w/ Oil Kings</li>
            <li><strong>D&D Campaign:</strong> 🧙 Dungeon of the Mad Mage</li>
            <li><strong>D&D Character Class:</strong> 🪨 Stone Sorcerer</li>
          </ul>
        </div>
        <div v-if="isMobile">
          <div class="section--experience mt-14">
            <h2 class="highlight">About Me</h2>
            <ExperienceContent :roles="this.experiencePage.roles" />
          </div>
          <div class="section--passion-projects mt-14">
            <h2 class="highlight">Passion Projects</h2>
            <PassionProjectsContent :projects="this.passionProjectsPage.projects" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutPage",
    transition: "page",
    async asyncData({ $content, params, error }) {
      const slug = params.slug || "about";
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
    head() {
      return {
        title: 'Brian Anderson - Front End Engineer'
      }
    },
    computed: {
      isMobile() {
        return this.$mq === "sm" || this.$mq === "md";
      }
    }
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
      animation: fade-up;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      opacity: 0;

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
  }

  li {
    margin-bottom: 10px;
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
