<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-8">
      <div class="flex flex-row justify-between items-center">
        <p class="font-bold text-2xl">Featured Projects</p>
        <div>
          <button
              type="button"
              @click="clear"
              class="bg-primary-600 shadow-md shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition mr-4"
          >Projekt hinzufügen</button>
          <button
              type="button"
              @click="clear"
              class="bg-emerald-600 shadow-md shadow-emerald-600/50 px-6 py-3 rounded-lg text-white hover:bg-emerald-700 transition"
          >Idee hinzufügen</button>
        </div>

      </div>

      <div class="my-6">
        <div v-for="i in 6" :key="i">
          <div class="group border rounded-xl hover:shadow-xl duration-300 transition-all lg:my-6 my-4 lg:mx-0 mx-4 lg:py-6 py-4 px-8">
            <div class="flex lg:flex-row flex-col lg:items-center items-start justify-between space-y-2">
              <IconLightbulb class="text-gray-400 h-12 bg-gray-100 rounded-full shrink-0 grow-0 p-2 avatar aspect-square"></IconLightbulb>
              <div class="flex flex-col justify-center text-left">
                <p class="text-gray-800 text-lg font-medium group-hover:font-bold group-hover:text-blue-600">Marktpreise 2024</p>
                <p class="text-gray-400">TQ6 – Altenholz</p>
              </div>
              <div class="flex flex-col justify-center text-left">
                <p class="text-gray-600">Matteo Kleemann</p>
                <p class="text-gray-400 text-sm">matteo.kleemann@dataport.de</p>
              </div>
              <div class="flex flex-row justify-center items-center">
                <p class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500">Vue</p>
                <p class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500">React</p>
                <p class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg group-hover:bg-blue-500">Spring Boot</p>
              </div>
              <div class="flex flex-col justify-center text-left">
                <p class="text-gray-400 text-sm">16.10.2024</p>
              </div>
              <div>
                <button
                    type="button"
                    @click="clear"
                    class="bg-blue-600 shadow-md shadow-blue-600/50 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
                >Ansehen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button
            type="button"
            @click="clear"
            class="w-1/4 bg-gray-400 shadow-lg text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >Alle anzeigen</button>
      </div>

    </div>
  </div>
</template>

<script>
import IconLightbulb from "@/components/project2/icons/IconLightbulb.vue";
export default {
  name: "ProjectList",
  components: { IconLightbulb}
}
</script>

<style scoped>

</style>
