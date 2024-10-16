<template>
  <div v-if="project">
    <div class="text-right pb-2">
      <button @click="closeProject">
        <IconClose class="w-6 h-6 text-gray-400 hover:text-gray-600 hover:scale-105"></IconClose>
      </button>
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/project/details/icon/IconClose.vue'

export default {
  name: 'ProjectActions',
  components: { IconClose },
  props: ['project'],
  data() {
    return {}
  },
  methods: {
    closeProject() {
      this.$emit('closeProject')
    }
  }
}
</script>

<style scoped></style>
