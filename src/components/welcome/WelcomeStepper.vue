<template>
  <div class="flex flex-col mx-auto max-w-screen-sm">
    <!-- Stepper Navigation & Progress-->
    <div class="w-full bg-gray-200 rounded-full mt-8">
      <div
        class="bg-primary-600 text-xs font-medium text-primary-100 text-center p-0.5 leading-none rounded-full"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <div class="" v-for="(step, index) in steps" :key="index">
      <component v-if="currentStep === index" :is="step"></component>
    </div>
    <div class="ml-auto">
      <div class="inline-flex">
        <button
          @click="prevStep"
          :disabled="currentStep === 0"
          class="py-2 px-4 border border-gray-400 rounded-lg mr-2 hover:cursor-pointer disabled:opacity-50"
        >
          Zurück
        </button>
        <button
          v-if="currentStep < steps.length - 1"
          @click="nextStep"
          class="py-2 px-6 text-white font-medium text-md border border-gray-400 bg-primary-700 rounded-lg hover:border-gray-900"
        >
          Weiter
        </button>
        <button
          v-if="currentStep === steps.length - 1"
          @click="submit"
          class="py-2 px-6 text-white font-medium text-md border border-gray-400 bg-primary-700 rounded-lg hover:border-gray-900"
        >
          Speichern
        </button>
      </div>
    </div>
    <!-- Stepper Action -->
  </div>
</template>

<script>
import WelcomeStepPersonal from '@/components/welcome/steps/WelcomeStepPersonal.vue'
import WelcomeStepDataport from '@/components/welcome/steps/WelcomeStepDataport.vue'

export default {
  name: 'WelcomeStepper',
  // eslint-disable-next-line vue/no-unused-components
  components: { WelcomeStepDataport, WelcomeStepPersonal },
  data() {
    return {
      currentStep: 0,
      progress: 50,
      steps: [WelcomeStepPersonal, WelcomeStepDataport]
    }
  },
  methods: {
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--
        this.updateProgress()
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++
        this.updateProgress()
      }
    },
    updateProgress() {
      this.progress = ((this.currentStep + 1) / this.steps.length) * 100
    },
    submit() {
      //Todo: Call Update/Post API
      this.$router.push('/projects')
    }
  }
}
</script>

<style scoped></style>
