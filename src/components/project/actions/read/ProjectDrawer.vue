<template>
  <!-- drawer component
     div: class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 w-full translate-x-full"
     class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 w-full transition-all duration-500 transform shadow-md" :class="{ 'translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen }" tabindex="-1"
     button: class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-7 end-7 inline-flex items-center justify-center"
    -->
  <transition name="drawer">
    <div
      v-if="isDrawerOpen"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 xl:w-1/3 w-full transition-all duration-500 transform shadow-md shadow-gray-300"
      :class="{ 'translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen }"
      tabindex="-1"
    >
      <div class="inline-flex absolute top-7 right-7">
        <button
            @click="editProject"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
        >
          <IconPencil class="w-4 h-4"></IconPencil>
          <span class="sr-only">Close menu</span>
        </button>
        <button
            @click="closeProject"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center"
        >
          <IconClose class="w-6 h-6"></IconClose>
          <span class="sr-only">Close menu</span>
        </button>
      </div>


      <ProjectInfo></ProjectInfo>
    </div>
  </transition>
</template>

<script>
import ProjectInfo from '@/components/project/actions/read/ProjectInfo.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconPencil from "@/components/icons/IconPencil.vue";
export default {
  name: 'ProjectDrawer',
  components: {IconPencil, IconClose, ProjectInfo },
  props: {
    isDrawerOpen: Boolean
  },
  data() {
    return {};
  },
  methods: {
    closeProject() {
      this.$emit('closeDrawer');
    },
    editProject() {
      this.closeProject();
    }
  }
};
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.5s ease;
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(100%);
}
.drawer-enter-to,
.drawer-leave {
  transform: translateX(0);
}
</style>
