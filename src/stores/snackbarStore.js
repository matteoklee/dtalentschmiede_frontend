import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    visible: false,
    message: '',
    snackbarType: 'default', // 'default', 'success', 'error', 'warning'
    duration: 3000
  }),

  actions: {
    showSnackbar(msg, type = 'default', time = 3000) {
      this.message = msg;
      this.snackbarType = type;
      this.duration = time;
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    },
    closeSnackbar() {
      this.visible = false;
    }
  }
});
