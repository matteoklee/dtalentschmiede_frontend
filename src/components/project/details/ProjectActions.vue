<template>
  <div v-if="project">
    <div class="text-right p-2">
      <button @click="closeProject">
        <IconProjectClose class="w-6 h-6"></IconProjectClose>
      </button>
    </div>
  </div>
</template>

<script>
import IconProjectClose from '@/components/project/details/icon/IconProjectClose.vue'

export default {
  name: 'ProjectActions',
  components: { IconProjectClose },
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
