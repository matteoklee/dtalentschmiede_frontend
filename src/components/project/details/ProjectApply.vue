<template>
  <div v-if="project">
    <div class="p-4 bg-white shadow-lg">
      <button
        class="p-4 button bg-red-700 font-medium text-lg text-white w-full hover:bg-white hover:text-primary-700 cursor-pointer hover:border-primary-700 hover:border-2"
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
