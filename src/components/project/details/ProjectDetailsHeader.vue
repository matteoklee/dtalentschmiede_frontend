<template>
  <div v-if="project">
    <div class="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h2 class="text-2xl font-bold mb-4">{{ project.title }}</h2>
      <p class="text-lg">{{ project.company }}</p>
      <p class="text-gray-600">{{ project.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetailsHeader",
  props: ['project'],
}
</script>

<style scoped>

</style>
