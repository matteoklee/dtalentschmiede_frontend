<template>
  <div>
    <!-- drawer init and toggle -->
    <div class="text-center">
      <button
        type="button"
        @click="open"
        data-drawer-target="drawer-right-example"
        data-drawer-show="drawer-right-example"
        data-drawer-placement="right"
        aria-controls="drawer-right-example"
        class="bg-blue-600 shadow-md shadow-blue-600/50 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
      >
        Ansehen
      </button>
    </div>

    <!-- drawer component -->
    <div
      id="drawer-right-example"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 w-full translate-x-full"
      tabindex="-1"
      aria-labelledby="drawer-right-label"
    >
      <button
        type="button"
        @click="closeDrawer"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-7 end-7 inline-flex items-center justify-center"
      >
        <IconClose class="w-6 h-6"></IconClose>
        <span class="sr-only">Close menu</span>
      </button>

      <ProjectInfo class="" :project="project"></ProjectInfo>

    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import ProjectInfo from '@/components/project/actions/read/ProjectInfo.vue'
import IconClose from "@/components/icons/IconClose.vue";
export default {
  name: 'ProjectDrawer',
  components: {IconClose, ProjectInfo },
  props: ['project'],
  data() {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    closeProject() {
      this.$emit('closeProject')
    }
  },
  mounted() {
    initFlowbite()
  }
}
</script>

<style scoped></style>
