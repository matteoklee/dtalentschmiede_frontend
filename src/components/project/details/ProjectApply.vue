<template>
  <div v-if="project">
    <div class="p-4 bg-white rounded-lg shadow-lg">
      <button
        class="p-4 button bg-red-700 rounded-lg font-medium text-lg text-white w-full shadow hover:bg-white hover:text-black cursor-pointer hover:shadow hover:shadow-red-600"
      >
        Jetzt bewerben!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectApply',
  props: ['project']
}
</script>

<style scoped></style>
