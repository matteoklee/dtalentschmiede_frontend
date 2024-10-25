<template>
  <transition name="snackbar-fade">
    <div
      v-show="snackbarStore.visible"
      :class="[
        'fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full p-4 rounded-lg shadow-md bg-gray-100 border font-medium border',
        snackbarStore.snackbarType === 'success' ? 'shadow-green-700/40' : snackbarStore.snackbarType === 'error' ? ' shadow-green-700/40' : ''
      ]"
      role="alert"
    >
      <div class="flex items-center justify-between">
        <div v-if="snackbarStore.snackbarType === 'success'">
          <IconCheck class="w-5 h-5 text-green-600"></IconCheck>
        </div>
        <div v-else-if="snackbarStore.snackbarType === 'error'">
          <IconError class="w-5 h-5 text-red-600"></IconError>
        </div>
        <div v-else>
          <IconInfo class="w-5 h-5 text-blue-600"></IconInfo>
        </div>
        <span class="ml-4">{{ snackbarStore.message }}</span>
        <button @click="closeSnackbar" class="">
          <IconClose class="w-5 h-5 text-gray-400 ml-4 hover:text-gray-600"></IconClose>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue';
import IconInfo from '@/components/icons/IconInfo.vue';
import IconError from '@/components/icons/IconError.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import {useSnackbarStore} from "@/stores/snackbarStore.js";
export default {
  name: 'ProjectSnackbar',
  setup() {
    const snackbarStore = useSnackbarStore();
    return {
      snackbarStore
    }
  },
  components: { IconCheck, IconError, IconInfo, IconClose },
  methods: {
    closeSnackbar() {
      this.snackbarStore.closeSnackbar();
    }
  },
};
</script>

<style scoped>
.snackbar-fade-enter-active,
.snackbar-fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.snackbar-fade-enter,
.snackbar-fade-leave-to {
  opacity: 0;
}
</style>
