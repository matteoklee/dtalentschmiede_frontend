<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto gap-6">
    <div class="flex flex-col justify-center lg:p-0 p-6">
      <h1 class="text-5xl font-bold text-left py-4">Finde dein nächstes<br><span class="text-primary-700">IT-Projekt</span>.</h1>
      <p class="font-normal text-lg py-2">Work remotely to companies in worldwide</p>

      <div class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-600 hover:scale-105 duration-300">
        <div class="flex items-center space-x-2 w-full relative mr-2">
          <IconSearch class="h-5 text-gray-400"></IconSearch>
          <input
              v-model="searchQuery"
              @input="searchProject"
              type="text"
              id="projectSearch"
              placeholder="Suche nach Titel, Technologie, ..."
              required
              class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
          />
          <button
              type="button"
              @click="clear"
              class="absolute right-0"
          >
            <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
          </button>
        </div>
        <button
            type="button"
            @click="clear"
            class="bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
        >Suchen</button>
      </div>

      <p class="text-gray-400 font-normal text-md py-4">Example:
        <span class="border px-3 py-1 mx-2 rounded-md">Idee</span>
        <span class="border px-3 py-1 mx-2 rounded-md">Abschlussarbeit</span>
        <span class="border px-3 py-1 mx-2 rounded-md">Projekt</span>
      </p>
    </div>
    <div class="flex flex-row">
      <img src="@/assets/img_2.png" />
    </div>
  </div>
</template>

<script>
import IconClose from "@/components/project/details/icon/IconClose.vue";
import IconSearch from "@/components/project2/icons/IconSearch.vue";

export default {
  name: "ProjectLanding",
  components: {IconSearch, IconClose}
}
</script>

<style scoped>

</style>
