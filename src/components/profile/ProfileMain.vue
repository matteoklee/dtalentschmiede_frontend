<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-0">
    <div class="bg-white m-4 p-4 shadow row-span-2">
      <ProfileGeneral></ProfileGeneral>
    </div>
    <div class="bg-white m-4 p-4 shadow lg:col-span-2">
      <ProfileSkills></ProfileSkills>
    </div>

    <div class="lg:col-start-2 bg-white m-4 p-4 shadow lg:col-span-2">
      <ProfileSkills></ProfileSkills>
    </div>


  </div>
  <div class="bg-white m-4 p-4 shadow">
    Projekte
  </div>
</template>

<script>
import ProfileGeneral from "@/components/profile/ProfileGeneral.vue";
import ProfileSkills from "@/components/profile/ProfileSkills.vue";

export default {
  name: "ProfileMain",
  components: {ProfileSkills, ProfileGeneral},
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
