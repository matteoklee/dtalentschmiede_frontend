<template>
  <div class="">
    <ProjectLanding></ProjectLanding>
  </div>
  <div>
    <ProjectSorting></ProjectSorting>
  </div>
  <div>
    <ProjectFilter></ProjectFilter>
  </div>

  <div>
    <ProjectList></ProjectList>
  </div>
</template>

<script>
import ProjectLanding from '@/components/project/ProjectLanding.vue';
import ProjectSorting from '@/components/project/ProjectSorting.vue';
import ProjectList from '@/components/project/ProjectList.vue';
import ProjectFilter from '@/components/project/ProjectFilter.vue';

export default {
  name: 'ProjectMain',
  components: { ProjectFilter, ProjectList, ProjectSorting, ProjectLanding },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
