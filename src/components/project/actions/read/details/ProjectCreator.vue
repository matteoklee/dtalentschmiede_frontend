<template>
  <div v-if="project">
    <div class="p-4 bg-gray-50 shadow-lg rounded-lg mb-4">
      <div class="py-4">
        <p class="text-lg">Projekt erstellt und betreut durch Mitarbeiter:</p>
        <p class="font-medium text-lg">
          {{ project.projectRepresentative }}, {{ project.projectRepresentativeEmail }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCreator',
  props: ['project']
}
</script>

<style scoped></style>
