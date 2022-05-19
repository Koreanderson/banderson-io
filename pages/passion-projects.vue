<template>
  <div class="relative py-20 mx-auto mb-20 max-w-screen-xl before:-left-24 before:bg-primary before:block before:top-0 before:bottom-0 before:w-52 before:absolute">
    <div class="relative max-w-xl">
      <h2>Passion Projects</h2>
      <div class="my-10 md:max-w-lg">
        <h3>Figma UI Kit Generator</h3>
        <div>
          Leveraging the Figma API and Node.js to generate UI Kit markup from a Figma template.
        </div>
      </div>
      <div class="my-10 md:max-w-lg">
        <h3>Dice Roll Object Detection Model</h3>
        <div>
          Training a custom Tensorflow Object Detection model to recognize tabletop game dice roll values.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passion Projects',
  transitions: 'page',
  setup() {
  },
}
</script>

<style lang="scss" scoped>
</style>