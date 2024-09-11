<template>
  <div class="px-2">
    <p class="text-xl font-bold">Skills</p>
    <ul class="flex flex-wrap items-center mt-2">
      <li v-for="skill in profileSkills" :key="skill" class="my-1 px-3 py-2 bg-green-100 text-green-700 mr-1 rounded-lg">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileSkills",
  data() {
    return {
      profileSkills: ["Brand Design", "Logo Design", "Software Development", "Wordpress", "Figma", "Prototyping", "UI Design"],
    }
  }
}
</script>

<style scoped>

</style>
