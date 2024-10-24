<template>
  <div v-if="project">
    <div class="p-4 bg-gray-50 shadow-lg mb-4 rounded-lg">
      <p class="my-8 text-justify">{{ project.projectDescription }}</p>
      <!-- mt-4 -->
      <div class="mb-4">
        <div class="flex flex-row items-center lg:col-span-2">
          <p
            v-for="(technology, index) in project.projectTechnologies"
            :key="index"
            class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2"
          >
            {{ getReadableTechnology(technology) }}
          </p>
        </div>
      </div>
      <div class="mb-4">
        <div class="flex flex-row items-center lg:col-span-2">
          <p
            v-for="(hardSkill, index) in project.projectHardSkills"
            :key="index"
            class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2"
          >
            {{ getReadableHardSkill(hardSkill) }}
          </p>
        </div>
      </div>
      <div class="mb-4">
        <div class="flex flex-row items-center lg:col-span-2">
          <p
            v-for="(softSkill, index) in project.projectSoftSkills"
            :key="index"
            class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2"
          >
            {{ getReadableSoftSkill(softSkill) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getReadableTechnology,
  getReadableHardSkill,
  getReadableSoftSkill
} from '@/utils/mappingUtils.js'
export default {
  name: 'ProjectDescription',
  props: ['project'],
  methods: {
    getReadableHardSkill,
    getReadableTechnology,
    getReadableSoftSkill
  }
}
</script>

<style scoped></style>
