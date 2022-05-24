<template>
  <div class="px-8">
    <NavMenu />
    <Nuxt />
  </div>
</template>

<script>
  export default {
    computed: {
      isMobile() {
        return this.$mq === "sm" || this.$mq === "md";
      }
    }
  }
</script>



