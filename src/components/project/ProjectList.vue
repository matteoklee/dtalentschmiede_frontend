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
          <button
            @click="openCreateModal"
            class="bg-red-700 shadow-md px-6 py-3 rounded-lg hover:bg-red-800 text-white mr-1"
            type="button"
            id="addProject"
          >
            Projekt erstellen
          </button>
          <ProjectCreateModal
            @submitProject="submitProject"
            :isModalOpen="isCreateModalOpen"
            @closeModal="closeCreateModal"
          ></ProjectCreateModal>
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
            class="relative grid grid-cols-1 lg:grid-cols-8 lg:gap-6 gap-2 items-center flex justify-center flex-col auto-cols-auto"
          >
            <div class="flex items-center space-x-4 lg:col-span-2">
              <component :is="getProjectTypeIcon(project.projectTypes[0]?.projectTypeValue || 'OTHER')"
                class="text-gray-400 h-12 bg-gray-100 rounded-full p-2 avatar aspect-square"
              ></component>
              <div class="flex flex-col">
                <p
                  class="text-left text-gray-800 text-lg font-medium group-hover:font-bold group-hover:text-blue-600"
                >
                  {{
                    project.projectTitle.length > 30
                        ? project.projectTitle.slice(0, 20) + '...'
                        : project.projectTitle
                  }}
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
                v-for="technology in project.projectTechnologies.slice(0, 3)"
                :key="technology.technologyId"
                class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500"
              >
                {{ technology.technologyName }}
              </p>
            </div>

            <div class="flex flex-col lg:justify-center items-center">
              <p class="text-gray-400 text-sm mb-1">{{ formatDateOnly(project.projectCreatedAt) }}</p>
              <div class="inline-flex items-center">
                <component :is="getProjectStatusIcon(project.projectStatus)"
                           class="text-gray-400 h-3 aspect-square mr-2"
                ></component>
                <p class="text-gray-400">{{ getReadableProjectStatus(project.projectStatus) }}</p>
              </div>

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
                :isDrawerOpen="isReadDrawerOpen"
                @closeDrawer="closeReadDrawer"
              ></ProjectDrawer>
            </div>

            <div class="hidden absolute -right-5 -top-4">
              <component :is="getProjectStatusIcon(project.projectStatus)"
                         class="text-gray-400 h-4 aspect-square"
              ></component>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center my-8">
        <button
          v-if="projectStore.projectViewLimit === 5"
          type="button"
          @click="toggleProjectViewLimit"
          class="lg:w-1/4 w-3/4 bg-gray-400 shadow-lg text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Alle anzeigen
        </button>
        <button
          v-else
          type="button"
          @click="toggleProjectViewLimit"
          class="lg:w-1/4 w-3/4 bg-gray-400 shadow-lg text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Weniger anzeigen
        </button>
      </div>
    </div>
    <ProjectSnackbar></ProjectSnackbar>
  </div>
</template>

<script>
import IconLightbulb from '@/components/icons/IconLightbulb.vue';
import ProjectDrawer from '@/components/project/actions/read/ProjectDrawer.vue';
import IconError from '@/components/icons/IconError.vue';
import ProjectCreateModal from '@/components/project/actions/create/ProjectCreateModal.vue';
import ProjectSnackbar from '@/components/project/actions/ProjectSnackbar.vue';

import { formatDateOnly } from '@/utils/dateUtil.js';
import { useProjectStore } from '@/stores/projectStore.js';
import { useSnackbarStore } from '@/stores/snackbarStore.js';
import {getProjectTypeIcon, getProjectStatusIcon} from "@/utils/iconUtil.js";
import {getReadableProjectStatus} from "@/utils/mappingUtils.js";

export default {
  name: 'ProjectList',
  setup() {
    const projectStore = useProjectStore();
    projectStore.fetchProjects();
    const snackbarStore = useSnackbarStore();
    return {
      projectStore,
      snackbarStore
    };
  },
  components: { ProjectSnackbar, ProjectCreateModal, IconError, ProjectDrawer, IconLightbulb },
  props: ['searchQuery'],
  data() {
    return {
      isReadDrawerOpen: false,
      isCreateModalOpen: false,
    };
  },
  methods: {
    getProjectTypeIcon,
    getReadableProjectStatus,
    getProjectStatusIcon,
    openReadDrawer() {
      this.isReadDrawerOpen = true;
    },
    closeReadDrawer() {
      this.isReadDrawerOpen = false;
      setTimeout(() => {
        this.projectStore.fetchProjects();
      }, 3000);
    },
    openCreateModal() {
      this.isCreateModalOpen = true;
    },
    closeCreateModal() {
      this.isCreateModalOpen = false;
    },
    selectProject(project) {
      this.projectStore.setSelectedProject(project);
      console.log(project);
      this.openReadDrawer();
    },
    closeProject() {
      this.projectStore.setSelectedProject(null);
    },
    toggleProjectViewLimit() {
      this.projectStore.toggleProjectViewLimit();
    },
    async submitProject() {
      await this.projectStore.fetchProjects();
      console.log('submitted project');
      this.snackbarStore.showSnackbar('Neues Projekt wurde angelegt!', 'success', 5000);
    },
    formatDateOnly(dateString) {
      return formatDateOnly(dateString);
    }
  },
};
</script>

<style scoped></style>
