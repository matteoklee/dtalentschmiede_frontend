<template>
  <div v-if="project">
    <div class="p-4 bg-gray-50 shadow-lg rounded-lg mb-4">
      <div class="flex flex-col justify-center items-center py-4">
        <p class="font-bold text-lg">Bewerbe dich direkt hier, falls dir dieses Projekt zusagt:</p>

        <button
          class="mt-4 inline-flex justify-center items-center py-2 px-6 bg-primary-700 rounded-lg font-medium text-lg text-white hover:underline decoration-2 hover:underline-offset-4 hover:duration-200 hover:transition-all hover:bg-primary-800"
        >
          <IconLink class="w-4 mr-2 font-thin"></IconLink>
          Jetzt bewerben!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from '@/components/project/details/icon/IconLink.vue'

export default {
  name: 'ProjectApply',
  components: { IconLink },
  props: ['project']
}
</script>

<style scoped></style>
