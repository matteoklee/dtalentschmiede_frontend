<template>
  <div>
    <!-- drawer init and toggle -->
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

    <!-- drawer component -->
    <!-- bg-black bg-gradient-to-r from-purple-800/50 from-10% via-indigo-700/50 via-30% to-blue-900/50 to-90%     bg-slate-900 -->
    <div
        id="drawer-full-example"
        class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-50 w-full translate-x-full bg-gray-50"
        tabindex="-1"
        aria-labelledby="drawer-full-label"
    >

      <div class="">
        <div class="max-w-screen-xl mx-auto justify-center items-center">
          <div class="my-4 w-full flex justify-between items-center">
            <div class="">
              <HeaderLogo class=""></HeaderLogo>
            </div>

            <div class="">
              <button
                  type="button"
                  @click="closeDrawer"
                  data-drawer-hide="drawer-full-example"
                  aria-controls="drawer-full-example"
                  class="text-gray-400 bg-transparent hover:text-gray-800 rounded-lg inline-flex items-center justify-center"
              > <!-- absolute top-2.5 end-2.5  -->
                <IconClose class="h-8 w-8"></IconClose>
                <span class="sr-only">Close menu</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto">
        <div class="flex flex-col justify-center items-start">
          <div>
            <p class="text-5xl font-bold text-left py-4">Erstelle ein neues <span class="text-primary-700">IT-Projekt</span>.</p>
            <p class="py-2 text-lg">Wie soll dein Projekt genannt werden?</p>
          </div>

          <div class="w-full">
            <div
                class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
            >
              <div class="flex items-center space-x-2 w-full relative mr-2">
                <IconFile class="h-5 text-gray-400"></IconFile>
                <input
                    v-model="title"
                    type="text"
                    id="projectSearch"
                    placeholder="Dein Titel des Projekts"
                    required
                    class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6 font-medium"
                    :disabled="titleValidated"
                />
                <button v-if="!titleValidated" @click="clear" type="button" class="absolute right-0">
                  <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
                </button>
                <button v-else type="button" @click="resetTitle" class="absolute right-0" data-tooltip-target="tooltip-animation">
                  <IconClose class="h-5 w-5 text-gray-400 hover:text-red-700"></IconClose>
                </button>

              </div>
              <button
                  v-if="!titleValidated"
                  type="button"
                  @click="validateTitle"
                  class="bg-green-600 shadow-lg shadow-green-600/50 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition"
              >Bestätigen</button
              >
            </div>

            <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Titel zurücksetzen
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <p class="text-gray-400 font-normal text-md py-2">
              Example:
              <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
              <span class="border px-3 py-1 mx-2 rounded-md">Plugin Excel</span>
              <span class="border px-3 py-1 mx-2 rounded-md">Access DB Update</span>
            </p>

          </div>

        </div>
        <div>
          <img src="@/assets/img_5.png" />
        </div>
      </div>

      <div v-if="titleValidated" class="bg-white">
        <div class="max-w-screen-xl mx-auto">

          <div class="col-span-2 w-1/2 mx-auto pt-6 pb-3">
            <div class="bg-blue-200 rounded-lg p-4 text-center">
              <div class="inline-flex items-center text-blue-700">
                <IconInfo class="w-4 h-4 mr-4"></IconInfo>
                <p class="text-black">Wähle eine Kategorie.</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 py-6 ">



            <div class="">
              <p class="text-2xl font-bold">Kategorie</p>
              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="flex items-center space-x-2 w-full relative mr-2">
                  <IconCode class="h-5 text-gray-400"></IconCode>
                  <input
                      v-model="searchQuery"
                      @input="searchProject"
                      type="text"
                      id="projectSearch"
                      placeholder="Dein Titel des Projekts"
                      required
                      class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
                  />
                  <button type="button" @click="clear" class="absolute right-0">
                    <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
                  </button>
                </div>
              </div>

              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="w-full relative">
                  <IconList class="h-5 text-gray-400 absolute left-0 top-3"></IconList>
                  <textarea rows="8" class="pl-8 block p-2.5 w-full text-gray-900 border-0 focus:ring-0" placeholder="Write your thoughts here..."></textarea>
                </div>

              </div>

              <p class="text-gray-400 font-normal text-md py-2">
                Example:
                <span class="border px-3 py-1 mx-2 rounded-md">IT-Projekt</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Abschlussarbeit</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Hospitation</span>
              </p>

            </div>

            <div class="">
              <p class="text-2xl font-bold">Kategorie</p>
              <div
                  class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
              >
                <div class="flex items-center space-x-2 w-full relative mr-2">
                  <IconFile class="h-5 text-gray-400"></IconFile>
                  <input
                      v-model="searchQuery"
                      @input="searchProject"
                      type="text"
                      id="projectSearch"
                      placeholder="Dein Titel des Projekts"
                      required
                      class="border-0 text-lg w-full outline-none focus:ring-0 placeholder-gray-300 pr-6"
                  />
                  <button type="button" @click="clear" class="absolute right-0">
                    <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
                  </button>
                </div>
                <a
                    type="button"
                    href="#projects"
                    class="bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
                >Bestätigen</a
                >
              </div>

              <p class="text-gray-400 font-normal text-md py-2">
                Example:
                <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Plugin Excel</span>
                <span class="border px-3 py-1 mx-2 rounded-md">Access DB Update</span>
              </p>

            </div>

          </div>
        </div>
      </div>

      <div v-else class="max-w-screen-xl mx-auto w-1/2 my-4">
        <div class="bg-red-300 rounded-lg p-4 text-center">
          <div class="inline-flex items-center text-red-700">
            <IconError class="w-4 h-4 mr-4"></IconError>
            <p class="text-black">Gib deinem Projekt erst einen Titel.</p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto w-full my-4">
          <div class="p-4 w-full bg-white rounded-lg shadow-lg">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">

              <div class="border border-r-2 border-0 px-8">
                <h2 class="text-xl font-bold my-4">Kategorie</h2>

                <div class="grid grid-cols-2 gap-4 mb-4">
                  <!-- Desktop -->
                  <div class="">
                    <input type="radio" v-model="selectedCategory" id="project" name="project" value="project" class="hidden" />
                    <label for="project" class="relative cursor-pointer flex flex-col items-center p-4 rounded-lg hover:bg-gray-100" :class="selectedCategory === 'project' ? 'bg-gray-100' : 'bg-white'">
                      <div class="inline-flex flex-col items-center justify-center my-4 aspect-square">
                        <IconLightbulb class="w-10 h-10" :class="selectedCategory === 'project' ? 'text-blue-600' : 'text-gray-300'"></IconLightbulb>
                        <span class="text-lg font-medium text-gray-700 py-4">IT-Projekt</span>
                      </div>
                      <!-- Haken anzeigen, wenn ausgewählt -->
                      <IconCheck v-if="selectedCategory === 'project'" class="w-6 h-6 absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white"></IconCheck>
                    </label>
                  </div>

                  <!-- Desktop -->
                  <div class="">
                    <input type="radio" v-model="selectedCategory" id="practice" name="practice" value="practice" class="hidden" />
                    <label for="practice" class="relative cursor-pointer flex flex-col items-center p-4 rounded-lg hover:bg-gray-100" :class="selectedCategory === 'practice' ? 'bg-gray-100' : 'bg-white'">
                      <div class="inline-flex flex-col items-center justify-center my-4 aspect-square">
                        <IconTools class="w-10 h-10" :class="selectedCategory === 'practice' ? 'text-blue-600' : 'text-gray-300'"></IconTools>
                        <span class="text-lg font-medium text-gray-700 py-4">Praxisstation</span>
                      </div>
                      <!-- Haken anzeigen, wenn ausgewählt -->
                      <IconCheck v-if="selectedCategory === 'practice'" class="w-6 h-6 absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white"></IconCheck>
                    </label>
                  </div>

                  <!-- Thesis -->
                  <div class="">
                    <input type="radio" v-model="selectedCategory" id="thesis" name="thesis" value="thesis" class="hidden" />
                    <label for="thesis" class="relative cursor-pointer flex flex-col items-center p-4 rounded-lg hover:bg-gray-100" :class="selectedCategory === 'thesis' ? 'bg-gray-100' : 'bg-white'">
                      <div class="inline-flex flex-col items-center justify-center my-4 aspect-square">
                        <IconBook class="w-10 h-10" :class="selectedCategory === 'thesis' ? 'text-blue-600' : 'text-gray-300'"></IconBook>
                        <span class="text-lg font-medium text-gray-700 py-4">Thesis</span>
                      </div>
                      <!-- Haken anzeigen, wenn ausgewählt -->
                      <IconCheck v-if="selectedCategory === 'thesis'" class="w-6 h-6 absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white"></IconCheck>
                    </label>
                  </div>

                  <!-- Desktop -->
                  <div class="">
                    <input type="radio" v-model="selectedCategory" id="other" name="other" value="other" class="hidden" />
                    <label for="other" class="relative cursor-pointer flex flex-col items-center p-4 rounded-lg hover:bg-gray-100" :class="selectedCategory === 'other' ? 'bg-gray-100' : 'bg-white'">
                      <div class="inline-flex flex-col items-center justify-center my-4 aspect-square">
                        <IconOther class="w-10 h-10" :class="selectedCategory === 'other' ? 'text-blue-600' : 'text-gray-300'"></IconOther>
                        <span class="text-lg font-medium text-gray-700 py-4">Anderes</span>
                      </div>
                      <!-- Haken anzeigen, wenn ausgewählt -->
                      <IconCheck v-if="selectedCategory === 'other'" class="w-6 h-6 absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white"></IconCheck>
                    </label>
                  </div>

                </div>
              </div>

              <div class="px-2">
                <h2 class="text-xl font-bold my-4">Eigenschaften</h2>
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium pb-1">Projektname *</label>
                  <input type="text" id="name" class="w-full p-4 bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0" placeholder="Untitled project" />
                </div>

                <div class="flex items-center space-x-2 bg-gray-50 py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300">
                  <div class="w-full relative">
                    <IconList class="h-5 text-gray-400 absolute left-0 top-3"></IconList>
                    <textarea rows="8" class="pl-8 block p-2.5 w-full border-0 focus:ring-0 bg-transparent" placeholder="Write your thoughts here..."></textarea>
                  </div>

                </div>

                <div class="mb-4">
                  <label for="device" class="block text-sm font-medium pb-1">Auswahl *</label>
                  <select id="device" class="w-full p-4 border rounded-lg text-lg focus:ring-0 bg-gray-50 border-0 shadow-md">
                    <option value="web-1366">Web 1366</option>
                    <option value="web-1920">Web 1920</option>
                    <option value="mobile-360">Mobile 360</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="text-center mt-12">
        <FooterInfo></FooterInfo>
        <FooterNav></FooterNav>
        <FooterCopyright></FooterCopyright>
      </div>

    </div>
  </div>
</template>

<script>
import {initFlowbite} from "flowbite";
import IconClose from "@/components/project/details/icon/IconClose.vue";
import HeaderLogo from "@/components/navigation/header/HeaderLogo.vue";
import FooterCopyright from "@/components/navigation/footer/FooterCopyright.vue";
import FooterNav from "@/components/navigation/footer/FooterNav.vue";
import FooterInfo from "@/components/navigation/footer/FooterInfo.vue";
import IconFile from "@/components/project2/icons/IconFile.vue";
import IconCode from "@/components/project2/icons/IconCode.vue";
import IconError from "@/components/project2/icons/IconError.vue";
import IconList from "@/components/home/icons/IconList.vue";
import IconInfo from "@/components/project2/icons/IconInfo.vue";
import IconCheck from "@/components/project2/icons/IconCheck.vue";
import IconBook from "@/components/project2/icons/IconBook.vue";
import IconLightbulb from "@/components/project2/icons/IconLightbulb.vue";
import IconTools from "@/components/project2/icons/IconTools.vue";
import IconOther from "@/components/project2/icons/IconOther.vue";
export default {
  name: "ProjectAddDrawer",
  components: {
    IconOther,
    IconTools,
    IconLightbulb,
    IconBook,
    IconCheck,
    IconInfo,
    IconList,
    IconError,
    IconCode,
    IconFile,  FooterInfo, FooterNav, FooterCopyright, HeaderLogo, IconClose},
  data() {
    return {
      isDrawerOpen: false,
      title: '',
      titleValidated: false,
      selectedCategory: 'project',

      project: {
        title: '',
        description: '',
        technologies: '',
        scope: '',
        startDate: new Date().toISOString().split('T')[0],
        supervisor: ''
      }
    }
  },
  methods: {
    validateTitle() {
      this.titleValidated = this.title !== '';
    },
    resetTitle() {
      this.titleValidated = false;
      this.title = "";
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    submitForm() {
      console.log('Projekt wurde angelegt:', this.project);
      alert('Projekt erfolgreich angelegt!');
      this.project = {
        title: '',
        description: '',
        technologies: '',
        scope: '',
        startDate: new Date().toISOString().split('T')[0],
        supervisor: ''
      };
    }
  },
  mounted() {
    initFlowbite();
  }
}
</script>

<style scoped>
</style>
