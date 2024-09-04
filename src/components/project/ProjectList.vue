<template>
  <div class="p-4">
    <div class="bg-white shadow-lg rounded-lg">
      <div
          v-for="project in projects"
          :key="project.id"
          @click="selectProject(project)"
          :class="[
            'border-b border-gray-200 hover:bg-gray-100 cursor-pointer',
            selectedProject && selectedProject.id === project.id ? 'border-l-4 border-b-gray-200 border-red-500' : ''
          ]"
      >
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ project.title }}</h3>
          <p class="text-sm text-gray-600">{{ project.company }}</p>
          <p class="text-sm text-gray-500">{{ project.location }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ProjectList",
  props: [],
  data() {
    return {
      projects: [
        { id: 1, title: 'Softwareentwickler (m/w/d)', company: 'expo3 GmbH', location: 'Tuttlingen' },
        { id: 2, title: 'Konfiguration Manager (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 3, title: 'Konfiguration Manager2 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 4, title: 'Konfiguration Manager3 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 5, title: 'Konfiguration Manager4 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 6, title: 'Konfiguration Manager5 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 7, title: 'Konfiguration Manager6 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 8, title: 'Konfiguration Manager4 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 9, title: 'Konfiguration Manager5 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 10, title: 'Konfiguration Manager6 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 11, title: 'Konfiguration Manager4 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 12, title: 'Konfiguration Manager5 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
        { id: 13, title: 'Konfiguration Manager6 (m/w/d)', company: 'TeamPower GmbH', location: 'Pforzheim' },
      ],
      selectedProject: null,
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
      this.$emit('selectProject', project);
      console.log(project);
    },
  },
}
</script>

<style scoped>

</style>
