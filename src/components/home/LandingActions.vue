<template>
  <div class="flex lg:flex-row flex-col justify-center items-center">
    <RouterLink to="/projects" class="mx-8">
      <div
        class="bg-white shadow-gray-400 shadow-md rounded-lg h-48 w-52 mx-auto m-4 group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div class="w-full p-6 text-center">
          <IconSignIn
            class="w-10 inline-flex my-2 text-gray-900 group-hover:text-primary-700"
          ></IconSignIn>
          <p class="lg:text-xl text-lg font-bold py-3">Anmelden</p>
          <hr
            class="w-3/4 border-t-2 border-gray-200 mt-4 transition-all duration-200 group-hover:border-primary-700 w-3/4 mx-auto"
          />
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/projects" class="mx-8">
      <div
        class="bg-white shadow-gray-400 shadow-md rounded-lg h-48 w-52 mx-auto m-4 group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div class="w-full p-6 text-center">
          <IconRegister
            class="w-10 inline-flex my-2 text-gray-900 group-hover:text-primary-700"
          ></IconRegister>
          <p class="lg:text-xl text-lg font-bold py-3">Registrieren</p>
          <hr
            class="w-3/4 border-t-2 border-gray-200 mt-4 transition-all duration-200 group-hover:border-primary-700 w-3/4 mx-auto"
          />
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/projects" class="mx-8">
      <div
        class="bg-white shadow-gray-400 shadow-md rounded-lg h-48 w-52 mx-auto m-4 group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div class="w-full p-6 text-center">
          <IconList
            class="w-10 inline-flex my-2 text-gray-900 group-hover:text-primary-700"
          ></IconList>
          <p class="lg:text-xl text-lg font-bold py-3">Projekte und Ideen anzeigen</p>
          <hr
            class="w-3/4 border-t-2 border-gray-200 mt-4 transition-all duration-200 group-hover:border-primary-700 w-3/4 mx-auto"
          />
        </div>
      </div>
    </RouterLink>
    <button type="button" @click="addProject" class="mx-8">
      <div
        class="bg-white shadow-gray-400 shadow-md rounded-lg h-48 w-52 mx-auto m-4 group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div class="w-full p-6 text-center">
          <IconFolder
            class="w-10 inline-flex my-2 text-gray-900 group-hover:text-primary-700"
          ></IconFolder>
          <p class="lg:text-xl text-lg font-bold py-3">Neues Projekt anelgen</p>
          <hr
            class="w-3/4 border-t-2 border-gray-200 mt-4 transition-all duration-200 group-hover:border-primary-700 w-3/4 mx-auto"
          />
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import IconFolder from '@/components/home/icons/IconFolder.vue'
import IconList from '@/components/home/icons/IconList.vue'
import IconSignIn from '@/components/navigation/header/profile/icons/IconSignIn.vue'
import IconRegister from '@/components/home/icons/IconRegister.vue'

export default {
  name: 'LandingActions',
  components: { IconRegister, IconSignIn, IconList, IconFolder },
  methods: {
    addProject() {
      this.$router.push('/projects').then(() => {
        this.$nextTick(() => {
          const button = document.querySelector('#addProject')
          if (button) {
            button.click()
          }
        })
      })
    }
  }
}
</script>

<style scoped></style>
