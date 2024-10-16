<template>
  <div class="grid grid-cols-2 shadow">
    <div class="lg:col-span-1 col-span-2">

      <div class="p-4">
        <p class="text-xl py-2.5 pl-1">Was suchst du?</p>
        <div class="relative">
          <input
              v-model="searchQuery"
              @input="searchProject"
              type="text"
              id="projectSearch"
              placeholder="Suche nach Titel, Technologie, ..."
              required
              class="text-gray-900 lg:text-2xl w-full lg:p-3 p-2 text-lg focus:ring-primary-700 rounded-lg focus:border-primary-700"
          />
          <button
              type="button"
              @click="clear"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end items-center lg:col-span-1 col-span-2 mx-4">
      <button class="m-4 p-4 bg-primary-700 rounded-lg font-medium text-white text-xl w-full hover:duration-200 hover:transition-all hover:bg-primary-800">
        Projekt oder Idee eintragen
      </button>
    </div>
    <div class="">
      <p class="text-xl mx-5 mb-3">220 Projekte</p>
    </div>
  </div>

</template>

<script>
import IconClose from '@/components/project/details/icon/IconClose.vue'

export default {
  name: 'ProjectSearch',
  components: { IconClose },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchProject() {
      this.$emit('searchProject', this.searchQuery)
    },
    clear() {
      this.searchQuery = ''
      this.searchProject()
    }
  }
}
</script>

<style scoped></style>
