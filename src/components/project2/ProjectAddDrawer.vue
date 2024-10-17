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
    <!-- bg-black bg-gradient-to-r from-purple-800/50 from-10% via-indigo-700/50 via-30% to-blue-900/50 to-90% -->
    <div
        id="drawer-full-example"
        class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-50 w-full translate-x-full bg-slate-900"
        tabindex="-1"
        aria-labelledby="drawer-full-label"
    >
      <div class="w-3/4 mx-auto flex flex-col">
        <button
            type="button"
            @click="closeDrawer"
            data-drawer-hide="drawer-full-example"
            aria-controls="drawer-full-example"
            class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
        >
          <IconClose class="h-5 w-5"></IconClose>
          <span class="sr-only">Close menu</span>
        </button>

        <div class="mb-8">
          <HeaderLogo class=""></HeaderLogo>
        </div>


        <div class="flex flex-col justify-center items-center">

          <div class="w-1/2 h-96 mx-auto bg-indigo-900/20 text-gray-400 border border-gray-600 p-6 rounded-lg m-4">

            <div>
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

          </div>

        </div>



        <div class="text-center mt-12">
          <FooterInfo></FooterInfo>
          <FooterNav class="text-blue-400"></FooterNav>
          <FooterCopyright></FooterCopyright>
        </div>
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
export default {
  name: "ProjectAddDrawer",
  components: {IconCheck, FooterInfo, FooterNav, FooterCopyright, HeaderLogo, IconClose, IconRight, Typer},
  data() {
    return {
      email: '',
      emailValidated: false,
    }
  },
  methods: {
    validateEmail() {
      this.emailValidated = this.email !== '';
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
