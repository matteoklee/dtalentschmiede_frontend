<template>
  <div class="">
    <div class="max-w-screen-xl mx-auto rounded-lg shadow-md">
      <div class="relative h-56 lg:h-72 bg-cover bg-top bg-[url('@/assets/img_3.png')] rounded-lg">
        <!-- bg-[url('@/assets/img_3.png')] -->
        <div class="absolute -bottom-12 left-6">
          <IconUserCircle
            class="h-24 rounded-full border-1 border-white shadow-lg text-gray-400 bg-gray-600 aspect-square"
          ></IconUserCircle>
        </div>
      </div>
      <div class="pt-4 pb-4">
        <div class="flex lg:flex-row flex-col lg:items-center items-start break-all">
          <div class="ml-32">
            <h1 class="text-xl font-bold text-gray-900">Matteo Kleemann</h1>
            <p class="pt-1 text-gray-600">matteoachim.kleemann@dataport.de</p>
          </div>
          <div class="lg:ml-auto ml-32 lg:mr-10 lg:py-0 py-2">
            <button
              type="button"
              @click="clear"
              class="bg-primary-600 shadow-lg px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
            >
              Profil bearbeiten
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto py-8 my-6">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8 mx-6 my-4 lg:m-0">
          <div class="">
            <p class="font-bold text-2xl pb-4">Profil</p>
            <div class="w-full aspect-square bg-gray-100 rounded-lg shadow-md">
              <div class="px-6 py-4">
                <ProfileGeneral2></ProfileGeneral2>
              </div>
            </div>
          </div>
          <div class="">
            <p class="font-bold text-2xl pb-4">Fachliche Fähigkeiten</p>
            <div class="w-full aspect-square bg-gray-100 rounded-lg shadow-md"></div>
          </div>
          <div class="">
            <p class="font-bold text-2xl pb-4">Technische Kenntnisse</p>
            <div class="w-full aspect-square bg-gray-100 rounded-lg shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconUserCircle from '@/components/navigation/header/profile/icons/IconUserCircle.vue'
import ProfileGeneral2 from '@/components/profile/ProfileGeneral.vue'
export default {
  name: 'ProfileDetails',
  components: { IconUserCircle, ProfileGeneral2 }
}
</script>

<style scoped></style>
