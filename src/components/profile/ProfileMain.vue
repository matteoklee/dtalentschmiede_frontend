<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-0">
    <div class="bg-white m-4 p-4 shadow row-span-2">
      <ProfileGeneral></ProfileGeneral>
    </div>
    <div class="bg-white m-4 p-4 shadow lg:col-span-2">
      <div class="px-2">
        <p class="text-xl font-bold">Skills</p>
        <ul class="flex flex-wrap items-center mt-2">
          <li v-for="skill in profileSkills" :key="skill" class="my-1 px-3 py-2 bg-green-100 text-green-700 mr-1 rounded-lg">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>


    <div class="lg:col-start-2 bg-white m-4 p-4 shadow lg:col-span-2">
      Software/Programming Language
      oder Skill Rating
    </div>


  </div>
  <div class="bg-white m-4 p-4 shadow">
    Projekte
  </div>
</template>

<script>
import ProfileGeneral from "@/components/profile/ProfileGeneral.vue";

export default {
  name: "ProfileMain",
  components: {ProfileGeneral},
  data () {
    return {
      profileSkills: ["Brand Design", "Logo Design", "Software Development", "Wordpress", "Figma", "Prototyping", "UI Design"],
    }
  }
}
</script>

<style scoped>

</style>
