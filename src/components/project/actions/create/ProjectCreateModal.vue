<template>
  <!-- Main modal -->
  <div
    v-if="isModalOpen"
    tabindex="-1"
    id="select-modal"
    aria-hidden="true"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
  >
    <div class="relative p-4 w-full max-w-screen-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">Was möchtest du erstellen?</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
            @click="closeModal"
          >
            <IconClose class="w-5 h-5"></IconClose>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <p class="text-gray-500 mb-4">Wähle deine gewünschte Art:</p>
          <ul
            class="lg:space-x-4 lg:space-y-0 space-x-0 space-y-4 mb-6 flex lg:flex-row flex-col justify-center lg:items-center"
          >
            <li class="">
              <input
                type="radio"
                id="job-1"
                name="job"
                value="job-1"
                class="hidden peer"
                required
              />
              <label
                for="job-1"
                class="aspect-square h-48 inline-flex items-center justify-center w-full p-5 text-gray-900 bg-white border border-dashed border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Leeres Projekt</div>
                  <div class="w-full text-gray-500 dark:text-gray-400">Von vorne beginnen</div>
                </div>
              </label>
            </li>
            <li class="">
              <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer" disabled />
              <label
                for="job-2"
                class="aspect-square h-48 border-dashed border-2 inline-flex items-center justify-center w-full p-5 text-gray-900 bg-white border border-gray-200  rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-9000"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Template Projekt</div>
                  <div class="w-full text-gray-500">Coming Soon</div>
                </div>
              </label>
            </li>
            <li class="hidden">
              <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer" />
              <label
                for="job-3"
                class="aspect-square h-48 border-dashed border-2 inline-flex items-center justify-center w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Idee erstellen</div>
                  <div class="w-full text-gray-500 dark:text-gray-400">Apple</div>
                </div>
              </label>
            </li>
          </ul>

          <div class="text-center">
            <button
              type="button"
              data-drawer-target="drawer-full-example"
              data-drawer-show="drawer-full-example"
              data-drawer-placement="right"
              aria-controls="drawer-full-example"
              class="bg-red-700 shadow-md px-6 py-3 rounded-lg hover:bg-red-800 hover:text-white text-white lg:mr-4 w-full font-medium"
            >
              Erstellen
            </button>
          </div>

          <ProjectCreateDrawer @submitProject="submitProject"></ProjectCreateDrawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue';
import ProjectCreateDrawer from '@/components/project/actions/create/ProjectCreateDrawer.vue';

export default {
  name: 'ProjectCreateModal',
  emits: ['submitProject', 'closeModal'],
  components: { ProjectCreateDrawer, IconClose },
  props: {
    isModalOpen: Boolean
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      /*
      const modalToggle = document.querySelector('[data-modal-toggle="select-modal"]');
      if (modalToggle) {
        modalToggle.click();
      }
       */
      this.$emit('closeModal', true);
    },
    submitProject() {
      this.closeModal();
      this.$emit('submitProject', true);
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
