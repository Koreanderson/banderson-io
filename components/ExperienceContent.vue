<template>
  <div>
    <div class="mb-10 md:mt-10" v-for="role in roles" :key="role.company">
      <h3>{{ role.company }}</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <h6>{{ role.title }}</h6>
        <div class="h6">{{ role.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceContent',
    props: {
      'roles': Array,
    },
    setup() {
    },
  }
</script>
