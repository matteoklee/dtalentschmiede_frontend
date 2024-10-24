<template>
  <!-- Modal toggle -->
  <button
    data-modal-target="select-modal"
    data-modal-toggle="select-modal"
    class="bg-red-700 shadow-md px-6 py-3 rounded-lg hover:bg-red-800 text-white mr-1"
    type="button"
    id="addProject"
  >
    Erstellen
  </button>

  <!-- Main modal -->
  <div
    id="select-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
            data-modal-toggle="select-modal"
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
            <li>
              <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer" />
              <label
                for="job-2"
                class="aspect-square h-48 border-dashed border-2 inline-flex items-center justify-center w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Projekt erstellen</div>
                  <div class="w-full text-gray-500">Alphabet</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer" />
              <label
                for="job-3"
                class="aspect-square h-48 border-dashed border-2 inline-flex items-center justify-center w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Idee erstellen</div>
                  <div class="w-full text-gray-500 dark:text-gray-400">Apple</div>
                </div>
              </label>
            </li>
          </ul>

          <ProjectAddDrawer @submitProject="submitProject"></ProjectAddDrawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'
import ProjectAddDrawer from '@/components/project/actions/create/ProjectAddDrawer.vue'

export default {
  name: 'ProjectNewModal',
  emits: ['submitProject'],
  components: { ProjectAddDrawer, IconClose },
  data() {
    return {}
  },
  methods: {
    closeModal() {
      const modalToggle = document.querySelector('[data-modal-toggle="select-modal"]')
      if (modalToggle) {
        modalToggle.click()
      }
    },
    submitProject() {
      console.log('DEBUG TEST3')
      this.closeModal()
      this.$emit('submitProject', true)
    }
  },
  mounted() {}
}
</script>

<style scoped></style>
