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

      <div class="m-4 max-w-screen-xl mx-auto flex flex-row justify-between items-center">
        <div class="">
          <HeaderLogo class=""></HeaderLogo>
        </div>

        <div>
          <button
              type="button"
              @click="closeDrawer"
              data-drawer-hide="drawer-full-example"
              aria-controls="drawer-full-example"
              class="text-gray-400 bg-transparent hover:text-gray-800 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
          > <!-- absolute top-2.5 end-2.5  -->
            <IconClose class="h-8 w-8"></IconClose>
            <span class="sr-only">Close menu</span>
          </button>
        </div>

        <div class="hidden flex flex-col justify-center items-center">
          <div class="w-3/4 mx-auto p-6 rounded-lg m-4"> <!-- bg-indigo-900/20 text-gray-400 border border-gray-600 -->

            <!--
            <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-4">Neues IT-Projekt anlegen</h2>

              <form @submit.prevent="submitForm">
                <div class="mb-4">
                  <label for="title" class="block text-sm font-medium text-gray-700">Projekttitel</label>
                  <input
                      v-model="project.title"
                      type="text"
                      id="title"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Geben Sie den Projekttitel ein"
                      required
                  />
                </div>

                <div class="mb-4">
                  <label for="description" class="block text-sm font-medium text-gray-700">Projektbeschreibung</label>
                  <textarea
                      v-model="project.description"
                      id="description"
                      rows="4"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Geben Sie eine kurze Beschreibung des Projekts ein"
                      required
                  ></textarea>
                </div>

                <div class="mb-4">
                  <label for="technologies" class="block text-sm font-medium text-gray-700">Technologien</label>
                  <input
                      v-model="project.technologies"
                      type="text"
                      id="technologies"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Z.B. Java, Python, Vue.js"
                      required
                  />
                </div>

                <div class="mb-4">
                  <label for="scope" class="block text-sm font-medium text-gray-700">Projektumfang</label>
                  <input
                      v-model="project.scope"
                      type="text"
                      id="scope"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Z.B. 3 Monate, 200 Stunden"
                      required
                  />
                </div>

                <div class="mb-4">
                  <label for="startDate" class="block text-sm font-medium text-gray-700">Startdatum</label>
                  <input v-model="project.startDate"
                         type="text"
                         id="startDate"
                         datepicker datepicker-buttons datepicker-autoselect-today
                         class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                         placeholder="Select date">

                </div>

                <div class="mb-4">
                  <label for="supervisor" class="block text-sm font-medium text-gray-700">Betreuer</label>
                  <input
                      v-model="project.supervisor"
                      type="text"
                      id="supervisor"
                      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Name des Betreuers"
                      required
                  />
                </div>

                <div class="flex justify-end">
                  <button
                      type="submit"
                      class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Projekt anlegen
                  </button>
                </div>
              </form>
            </div>
          </div>
          -->
          </div>
          <!--
          <div class="w-1/2 mx-auto bg-indigo-900/20 text-gray-400 border border-gray-600 p-6 rounded-lg m-4">

            <div class="">
              <div class="text-xl text-red-600">
                <Typer
                    :text="['Willkommen in der dProjektbörse!\nLass uns direkt loslegen!']"
                    :erase-on-complete="false"
                    caret-animation="smooth"
                    :repeat="0"
                    :shuffle="false"
                    :type-delay="70"
                    class="vue-typer"
                />
              </div>

            </div>
            <div>
              <p class="text-lg font-bold pt-8 drop-shadow-lg shadow-cyan-500/50 text-cyan-400">
                Enter your E-Mail*
              </p>
              <div class="inline-flex flex-row justify-start items-center pt-4 w-full">
                <IconRight v-if="!emailValidated" class="text-pink-400 h-4 mr-4"></IconRight>
                <IconCheck v-else class="text-green-500 h-4 mr-4"></IconCheck>
                <input type="text" v-model="email" class="bg-transparent rounded-lg w-full mr-4" />
                <button type="button" @click="validateEmail" class="bg-transparent border border-gray-400 text-gray-400 px-3 py-2 rounded-lg ml-auto">Continue</button>
              </div>
            </div>
            <div>
              <p class="text-lg font-bold pt-8 drop-shadow-lg shadow-cyan-500/50 text-cyan-400">
                Create a Password*
              </p>
              <div class="inline-flex flex-row justify-start items-center pt-4 w-full">
                <IconRight v-if="!emailValidated" class="text-pink-400 h-4 mr-4"></IconRight>
                <IconCheck v-else class="text-green-500 h-4 mr-4"></IconCheck>
                <input type="text" class="bg-transparent rounded-lg w-full mr-4" />
                <button type="button" class="bg-transparent border border-gray-400 text-gray-400 px-3 py-2 rounded-lg ml-auto">Continue</button>
              </div>
            </div>

          </div> -->
        </div>
      </div>

      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto">
        <div class="flex flex-col justify-center items-start">
          <div>
            <p class="text-5xl font-bold text-left py-4">Erstelle ein neues <span class="text-primary-700">IT-Projekt</span>.</p>
            <p class="py-2 text-lg">Work remotely to companies in worldwide</p>
          </div>

          <div class="w-full">
            <div
                class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-600 hover:scale-100 duration-300"
            >
              <div class="flex items-center space-x-2 w-full relative mr-2">
                <IconFile class="h-5 text-gray-400"></IconFile>
                <input
                    v-model="searchQuery"
                    @input="searchProject"
                    type="text"
                    id="projectSearch"
                    placeholder="Titel des Projekts"
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

            <p class="text-gray-400 font-normal text-md py-4">
              Example:
              <span class="border px-3 py-1 mx-2 rounded-md">Idee</span>
              <span class="border px-3 py-1 mx-2 rounded-md">Abschlussarbeit</span>
              <span class="border px-3 py-1 mx-2 rounded-md">Projekt</span>
            </p>

          </div>
        </div>
        <div>
          <img src="@/assets/img_5.png" />
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
import {Typer} from "vue3-typer";
import IconRight from "@/components/project2/icons/IconRight.vue";
import IconClose from "@/components/project/details/icon/IconClose.vue";
import HeaderLogo from "@/components/navigation/header/HeaderLogo.vue";
import FooterCopyright from "@/components/navigation/footer/FooterCopyright.vue";
import FooterNav from "@/components/navigation/footer/FooterNav.vue";
import FooterInfo from "@/components/navigation/footer/FooterInfo.vue";
import IconCheck from "@/components/project2/icons/IconCheck.vue";
import IconFile from "@/components/project2/icons/IconFile.vue";
export default {
  name: "ProjectAddDrawer",
  components: {IconFile, IconCheck, FooterInfo, FooterNav, FooterCopyright, HeaderLogo, IconClose, IconRight, Typer},
  data() {
    return {
      email: '',
      emailValidated: false,

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
    validateEmail() {
      this.emailValidated = this.email !== '';
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
