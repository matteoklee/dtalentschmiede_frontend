<template>
  <transition name="snackbar-fade">
    <div
        v-show="visible"
        :class="[
        'fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full p-4 rounded-lg shadow-2xl bg-gray-50 font-medium border',
        snackbarType === 'success'
          ? ''
          : snackbarType === 'error'
          ? ''
          : '',
      ]"
        role="alert"
    >
      <div class="flex items-center justify-between">
        <div v-if="snackbarType === 'success'">
          <IconCheck class="w-5 h-5 text-green-600"></IconCheck>
        </div>
        <div v-else-if="snackbarType === 'error'">
          <IconError class="w-5 h-5 text-red-600"></IconError>
        </div>
        <div v-else>
          <IconInfo class="w-5 h-5 text-blue-600"></IconInfo>
        </div>
        <span class="ml-4">{{ message }}</span>
        <button @click="closeSnackbar" class="">
          <IconClose class="w-5 h-5 text-gray-400 ml-4 hover:text-gray-600"></IconClose>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import IconClose from "@/components/project/details/icon/IconClose.vue";
import IconInfo from "@/components/project2/icons/IconInfo.vue";
import IconError from "@/components/project2/icons/IconError.vue";
import IconCheck from "@/components/project2/icons/IconCheck.vue";

export default {
  name: "ProjectInfoSnackbar",
  components: {IconCheck, IconError, IconInfo, IconClose},
  props: {
    message: {
      type: String,
      required: true,
    },
    snackbarType: {
      type: String,
      default: "default", // 'success', 'error', or 'default'
    },
    duration: {
      type: Number,
      default: 3000, // Snackbar visible duration (in ms)
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showSnackbar() {
      setTimeout(() => {
        this.visible = true;
      }, 10); // Kleine Verzögerung für die Einblend-Animation
      setTimeout(() => {
        this.closeSnackbar();
      }, this.duration);
    },
    closeSnackbar() {
      this.visible = false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.showSnackbar();
    });
  },

}
</script>

<style scoped>
.snackbar-fade-enter-active,
.snackbar-fade-leave-active {
  transition: opacity 0.3s ease;
}
.snackbar-fade-enter,
.snackbar-fade-leave-to {
  opacity: 0;
}
</style>
