<template>
  <div class="p-4">
    <input v-model="searchQuery" @input="searchProject" type="text" id="projectSearch" placeholder="Suche nach Titel, Technologie, ..." required
           class="text-gray-900 lg:text-4xl block w-full lg:p-4 p-2 text-lg focus:ring-primary-700 focus:border-primary-700"/>
  </div>
</template>

<script>
export default {
  name: "ProjectSearch",
  data() {
    return {
      searchQuery: "",
    }
  },
  methods: {
    searchProject() {
      this.$emit("searchProject", this.searchQuery);
    }
  }
}
</script>

<style scoped>

</style>
