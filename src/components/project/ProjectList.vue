<template>
  <div id="projects" class="bg-white">
    <div class="max-w-screen-xl mx-auto py-2">
      <div class="flex flex-col lg:flex-row justify-between lg:items-center items-start">
        <p class="font-bold text-2xl lg:px-0 px-6">Featured Projects</p>
        <div class="lg:px-0 px-6 py-2 lg:py-0 flex lg:flex-row flex-col lg:items-center">
          <!--
          <button
            type="button"
            @click="clear"
            class="bg-gray-200 shadow-md px-6 py-3 rounded-lg hover:bg-gray-600 hover:text-white transition mr-4"
          >
            Projekt hinzufügen
          </button>
          -->
          <!--<ProjectAddDrawer></ProjectAddDrawer>-->
          <ProjectNewModal @submitProject="submitProject"></ProjectNewModal>
          <!--
          <button
            type="button"
            @click="clear"
            class="bg-gray-400 shadow-md px-6 py-3 text-white rounded-lg hover:bg-gray-800 hover:text-white transition lg:mt-0 mt-4"
          >
            Idee hinzufügen
          </button>
          -->
        </div>
      </div>

      <div>
        <button @click="triggerSnackbar" class="hidden bg-blue-500 text-white px-4 py-2 rounded-lg">
          Zeige Snackbar
        </button>
        <ProjectInfoSnackbar
          v-if="snackbarVisible"
          :message="snackbarMessage"
          :snackbarType="snackbarType"
          :duration="snackbarDuration"
        />
      </div>

      <div class="my-6">
        <div v-if="projectStore.filteredProjects.length === 0">
          <div class="flex flex-col items-center mx-4">
            <div
              class="text-gray-800 inline-flex bg-red-200 p-4 lg:w-1/2 w-full justify-center rounded-lg"
            >
              <IconError class="h-5 text-primary-700 mr-4"></IconError>
              <span>Es konnten keine Projekte gefunden werden.</span>
            </div>
          </div>
        </div>
        <div
          v-for="project in projectStore.filteredProjects"
          :key="project.projectId"
          :class="[
            'group border hover:border-blue-500 rounded-xl hover:shadow-xl duration-300 transition-all lg:my-6 my-4 lg:mx-0 mx-4 lg:py-6 py-4 px-8',
            projectStore.selectedProject &&
            projectStore.selectedProject.projectId === project.projectId
              ? 'group border-2 border-blue-500 rounded-xl hover:shadow-xl duration-300 transition-all lg:my-6 my-4 lg:mx-0 mx-4 lg:py-6 py-4 px-8'
              : ''
          ]"
        >
          <div
            class="grid grid-cols-1 lg:grid-cols-8 lg:gap-6 gap-2 items-center flex justify-center flex-col auto-cols-auto"
          >
            <div class="flex items-center space-x-4 lg:col-span-2">
              <IconLightbulb
                class="text-gray-400 h-12 bg-gray-100 rounded-full p-2 avatar aspect-square"
              ></IconLightbulb>
              <div class="flex flex-col">
                <p
                  class="text-left text-gray-800 text-lg font-medium group-hover:font-bold group-hover:text-blue-600"
                >
                  {{ project.projectTitle }}
                </p>
                <p class="text-gray-400 text-left">
                  {{
                    project.projectDescription.length > 20
                      ? project.projectDescription.slice(0, 20) + '...'
                      : project.projectDescription
                  }}
                </p>
              </div>
            </div>

            <div class="flex flex-col lg:justify-center text-left lg:col-span-2">
              <p class="text-gray-600">{{ project.projectRepresentative }}</p>
              <p class="text-gray-400 text-sm">{{ project.projectRepresentativeEmail }}</p>
            </div>

            <div class="flex flex-row items-center lg:col-span-2">
              <p
                v-for="(technology, index) in project.projectTechnologies.slice(0, 3)"
                :key="index"
                class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500"
              >
                {{ technology }}
              </p>
            </div>

            <div class="flex flex-row lg:justify-center items-center">
              <p class="text-gray-400 text-sm">{{ formatDateOnly(project.projectCreatedAt) }}</p>
            </div>

            <div class="flex flex-row lg:justify-center items-center">
              <!--
                <button
                    type="button"
                    @click="clear"
                    class="bg-blue-600 shadow-md shadow-blue-600/50 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
                >Ansehen</button>
                -->
              <div class="text-center">
                <button
                  type="button"
                  @click="selectProject(project)"
                  data-drawer-placement="left"
                  aria-controls="drawer-right-example"
                  class="bg-blue-600 shadow-md shadow-blue-600/50 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
                >
                  Ansehen
                </button>
              </div>
              <ProjectDrawer
                :isDrawerOpen="isDrawerOpen"
                @closeDrawer="closeDrawer"
              ></ProjectDrawer>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-8">
        <button
          v-if="projectViewLimit !== -1"
          type="button"
          @click="showAllProjects"
          class="lg:w-1/4 w-3/4 bg-gray-400 shadow-lg text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Alle anzeigen
        </button>
        <button
          v-else
          type="button"
          @click="showLessProjects"
          class="lg:w-1/4 w-3/4 bg-gray-400 shadow-lg text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Weniger anzeigen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite';
import IconLightbulb from '@/components/icons/IconLightbulb.vue';
import ProjectDrawer from '@/components/project/actions/read/ProjectDrawer.vue';
import IconError from '@/components/icons/IconError.vue';
import ProjectNewModal from '@/components/project/actions/create/ProjectNewModal.vue';
import ProjectInfoSnackbar from '@/components/project/actions/ProjectInfoSnackbar.vue';

import { formatDateOnly } from '@/utils/dateUtils.js';
import { useProjectStore } from '@/stores/projectStore.js';

export default {
  name: 'ProjectList',
  setup() {
    const projectStore = useProjectStore();
    projectStore.fetchProjects();
    return {
      projectStore
    };
  },
  components: { ProjectInfoSnackbar, ProjectNewModal, IconError, ProjectDrawer, IconLightbulb },
  props: ['searchQuery'],
  data() {
    return {
      isDrawerOpen: false,
      projectViewLimit: 5,

      snackbarVisible: false,
      snackbarMessage: 'Projekt wurde erfolgreich angelegt.',
      snackbarType: 'success',
      snackbarDuration: 5000
    };
  },
  methods: {
    openDrawer() {
      this.isDrawerOpen = true;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    selectProject(project) {
      this.projectStore.setSelectedProject(project);
      console.log(project);
      this.openDrawer();
    },
    closeProject() {
      this.projectStore.setSelectedProject(null);
    },
    showAllProjects() {
      this.projectViewLimit = -1;
    },
    showLessProjects() {
      this.projectViewLimit = 5;
    },
    triggerSnackbar() {
      this.snackbarVisible = true;
      this.snackbarDuration = 5000;
      setTimeout(() => {
        this.snackbarVisible = false;
      }, 5000);
    },
    submitProject() {
      this.triggerSnackbar();
    },
    formatDateOnly(dateString) {
      return formatDateOnly(dateString);
    }
  },
  mounted() {
    initFlowbite();
  },
  computed: {
    filterProjects() {
      let filteredProjects;

      if (this.searchQuery !== '' && this.searchQuery !== undefined) {
        filteredProjects = this.allProjects.filter((project) => {
          const query = this.searchQuery.toLowerCase();
          return (
            project.projectTitle.toLowerCase().includes(query) ||
            project.projectDescription.toLowerCase().includes(query) ||
            project.projectRepresentativeEmail.toLowerCase().includes(query) ||
            project.projectRepresentative.toLowerCase().includes(query)

            //(project.projectTypes && project.projectTypes.some(type => type.toLowerCase().includes(query))) ||
            //(project.projectStatus && project.projectStatus.toLowerCase().includes(query)) ||
            //(project.projectTechnologies && project.projectTechnologies.some(tech => tech.toLowerCase().includes(query))) ||
            //(project.projectSoftSkills && project.projectSoftSkills.some(skill => skill.toLowerCase().includes(query))) ||
            //(project.projectHardSkills && project.projectHardSkills.some(skill => skill.toLowerCase().includes(query)))
          );
        });
      } else {
        filteredProjects = this.allProjects;
      }
      if (this.projectViewLimit > 0) {
        if (this.projectViewLimit > 5) {
          return filteredProjects.slice(0, this.projectViewLimit);
        } else {
          return filteredProjects;
        }
      } else {
        return filteredProjects;
      }
    }
  }
};
</script>

<style scoped></style>
