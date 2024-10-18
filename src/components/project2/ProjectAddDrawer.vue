<template>
  <div>
    <!-- drawer init and toggle -->
    <div class="text-center">
      <button
          type="button"
          @click="open"
          data-drawer-target="drawer-full-example"
          data-drawer-show="drawer-full-example"
          data-drawer-placement="right"
          aria-controls="drawer-full-example"
          class="bg-gray-200 shadow-md px-6 py-3 rounded-lg hover:bg-gray-600 hover:text-white transition lg:mr-4"
      >
        Projekt hinzufügen
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

      <div v-else class="max-w-screen-xl mx-auto w-1/2">
        <div class="bg-red-300 rounded-lg p-4 text-center">
          <div class="inline-flex items-center text-red-700">
            <IconError class="w-4 h-4 mr-4"></IconError>
            <p class="text-black">Gib deinem Projekt erst einen Titel.</p>
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
export default {
  name: "ProjectAddDrawer",
  components: {
    IconInfo,
    IconList,
    IconError,
    IconCode,
    IconFile,  FooterInfo, FooterNav, FooterCopyright, HeaderLogo, IconClose},
  data() {
    return {
      title: '',
      titleValidated: false,

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
    submitForm() {
      // Sende die Projektdaten, z.B. an eine API oder speichere lokal
      console.log('Projekt wurde angelegt:', this.project);
      alert('Projekt erfolgreich angelegt!');
      // Formular zurücksetzen
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
@import '@/components/home/css/vue-typer-style.scss';/* Korrekt */
</style>
