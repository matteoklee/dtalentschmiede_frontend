<template>
  <div class="my-auto flex flex-col justify-center items-center h-screen">
    <!--<div class="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dataport_Logo.svg/2560px-Dataport_Logo.svg.png')] bg-contain bg-no-repeat bg-center min-h-screen">-->
    <div
      class="h-[800px] rounded-lg w-full text-white bg-20% bg-left bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dataport_Logo.svg/1200px-Dataport_Logo.svg.png')] bg-gray-900 bg-blend-multiply"
    >
      <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-0 h-full">
        <div class="p-12 flex flex-col">
          <div>
            <div class="inline-flex">
              <img
                src="/src/assets/1200px-Dataport_Logo.svg 1.png"
                class="mr-3 h-6 lg:h-12"
                alt="Dataport Logo"
              />
              <HeaderTitle></HeaderTitle>
            </div>
          </div>

          <div class="py-12 text-gray-100">
            <p class="text-2xl font-bold">Willkommen!</p>
            <p class="text-lg font-thin pt-4">
              Explore our intuitive dashboard and set up your account in just a few clicks.
            </p>
          </div>
          <div class="mt-auto py-4">
            <RouterLink to="/" class="text-blue-500 hover:underline">Setup überspringen</RouterLink>
          </div>
          <div class="">
            <FooterCopyright></FooterCopyright>
          </div>
        </div>

        <div class="col-span-2 rounded-lg bg-gray-100 text-black shadow-lg p-8 m-8">
          <WelcomeStepper></WelcomeStepper>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import HeaderTitle from '@/components/navigation/header/HeaderTitle.vue'
import FooterCopyright from '@/components/navigation/footer/FooterCopyright.vue'
import WelcomeStepper from '@/components/welcome/WelcomeStepper.vue'

export default {
  name: 'WelcomeMain',
  components: { WelcomeStepper, FooterCopyright, HeaderTitle }
}
</script>

<style scoped></style>
