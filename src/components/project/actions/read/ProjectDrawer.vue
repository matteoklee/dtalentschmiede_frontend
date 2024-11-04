<template>
  <!-- drawer component
     div: class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 w-full translate-x-full"
     class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 w-full transition-all duration-500 transform shadow-md" :class="{ 'translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen }" tabindex="-1"
     button: class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-7 end-7 inline-flex items-center justify-center"
    -->
  <transition name="drawer">
    <div
      v-if="isDrawerOpen"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-100 lg:w-1/2 xl:w-1/3 w-full transition-all duration-500 transform shadow-md shadow-gray-300"
      :class="{ 'translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen }"
      tabindex="-1"
    >
      <div class="inline-flex absolute top-7 right-7">
        <button
          v-if="!isEditing"
          @click="editProject"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
        >
          <IconPencil class="w-4 h-4"></IconPencil>
          <span class="sr-only">Close menu</span>
        </button>
        <button
          @click="closeProject"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
        >
          <IconClose class="w-6 h-6"></IconClose>
          <span class="sr-only">Close menu</span>
        </button>
      </div>

      <div v-if="!isEditing">
        <ProjectInfo></ProjectInfo>
      </div>

      <div v-else>
        <div class="px-2">
          <h2 class="text-xl font-bold my-4">Eigenschaften</h2>

          <div class="mb-4">
            <label for="name" class="block text-sm font-medium pb-1">Projektname *</label>
            <input
              v-model="editableProject.projectTitle"
              type="text"
              id="name"
              class="w-full p-4 bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
              placeholder="Untitled project"
            />
          </div>

          <div class="mb-4">
            <label for="name" class="block text-sm font-medium pb-1">Projektbeschreibung *</label>
            <div
              class="flex items-center space-x-2 bg-gray-50 py-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
            >
              <div class="w-full relative">
                <IconList class="h-5 absolute left-0 top-3"></IconList>
                <textarea
                  v-model="editableProject.projectDescription"
                  id="description"
                  rows="16"
                  class="pl-8 block p-2.5 w-full border-0 focus:ring-0 bg-transparent"
                  placeholder="Das Projekt BeispielXY soll ... (Requirements, Environment, Tasks, TechStack)"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mb-4 flex items-start justify-left">
            <div class="">
              <label class="block text-sm font-medium pb-1">Technologien</label>

              <button
                  @click="isDropDownTechnologiesOpen = !isDropDownTechnologiesOpen"
                  id="dropdownDefault1"
                  data-dropdown-toggle="dropdown1"
                  class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
              >
                Technologien auswählen
                <IconChevronDown class="w-4 h-4 ml-2"></IconChevronDown>
              </button>
              <!-- Dropdown menu -->
              <div v-show="isDropDownTechnologiesOpen" id="dropdown1" class="z-10 w-56 p-3 bg-white rounded-lg shadow">
                <h6 class="mb-3 text-sm font-medium text-gray-900">Technologien</h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault1">
                  <li
                      v-for="(item, index) in technologyStore.technologies"
                      :key="index"
                      class="flex items-center"
                  >
                    <input
                        v-model="selectedTechnologies"
                        :id="item.technologyValue"
                        type="checkbox"
                        :value="item.technologyValue"
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                    />
                    <label :for="item.technologyValue" class="ml-2 text-sm font-medium text-gray-900">
                      {{ item.technologyName }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium pb-1">Projekttyp</label>
              <button
                  @click="isDropDownProjectTypeOpen = !isDropDownProjectTypeOpen"
                  id="dropdownDefault2"
                  data-dropdown-toggle="dropdown2"
                  class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
              >
                Projekttyp auswählen
                <IconChevronDown class="w-4 h-4 ml-2"></IconChevronDown>
              </button>
              <div v-show="isDropDownProjectTypeOpen" id="dropdown2" class="z-10 w-56 p-3 bg-white rounded-lg shadow">
                <h6 class="mb-3 text-sm font-medium text-gray-900">Projekttypen</h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault2">
                  <li
                      v-for="(item, index) in projectTypeStore.projectTypes"
                      :key="index"
                      class="flex items-center"
                  >
                    <input
                        v-model="selectedProjectTypes"
                        :id="item.projectTypeValue"
                        type="checkbox"
                        :value="item.projectTypeValue"
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                    />
                    <label :for="item.projectTypeValue" class="ml-2 text-sm font-medium text-gray-900">
                      {{ item.projectTypeName }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          <div class="mb-4 flex items-start justify-left">
            <div class="">
              <label class="block text-sm font-medium pb-1">Hard Skills</label>

              <button
                  @click="isDropDownHardSkillsOpen = !isDropDownHardSkillsOpen"
                  id="dropdownDefault3"
                  data-dropdown-toggle="dropdown3"
                  class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
              >
                Hard Skills auswählen
                <IconChevronDown class="w-4 h-4 ml-2"></IconChevronDown>
              </button>
              <!-- Dropdown menu -->
              <div v-show="isDropDownHardSkillsOpen" id="dropdown3" class="z-10 w-56 p-3 bg-white rounded-lg shadow">
                <h6 class="mb-3 text-sm font-medium text-gray-900">Hard Skills</h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault3">
                  <li
                      v-for="(item, index) in hardSkillStore.hardSkills"
                      :key="index"
                      class="flex items-center"
                  >
                    <input
                        v-model="selectedHardSkills"
                        :id="item.hardSkillValue"
                        type="checkbox"
                        :value="item.hardSkillValue"
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                    />
                    <label :for="item.hardSkillValue" class="ml-2 text-sm font-medium text-gray-900">
                      {{ item.hardSkillName }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium pb-1">Soft Skills</label>
              <button
                  @click="isDropDownSoftSkillsOpen = !isDropDownSoftSkillsOpen"
                  id="dropdownDefault4"
                  data-dropdown-toggle="dropdown4"
                  class="lg:mr-4 mb-2 lg:mb-0 text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 shadow-lg font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
              >
                Soft Skills auswählen
                <IconChevronDown class="w-4 h-4 ml-2"></IconChevronDown>
              </button>
              <!-- Dropdown menu -->
              <div v-show="isDropDownSoftSkillsOpen" id="dropdown4" class="z-10 w-56 p-3 bg-white rounded-lg shadow">
                <h6 class="mb-3 text-sm font-medium text-gray-900">Hard Skills</h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault4">
                  <li
                      v-for="(item, index) in softSkillStore.softSkills"
                      :key="index"
                      class="flex items-center"
                  >
                    <input
                        v-model="selectedSoftSkills"
                        :id="item.softSkillValue"
                        type="checkbox"
                        :value="item.softSkillValue"
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-0"
                    />
                    <label :for="item.softSkillValue" class="ml-2 text-sm font-medium text-gray-900">
                      {{ item.softSkillName }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          <div class="mb-4">
            <label for="device" class="block text-sm font-medium pb-1"
              >Deadline (falls nötig)</label
            >
            <div
              class="inline-flex items-center w-full bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
            >
              <IconCalendar class="w-4 h-4 ml-4"></IconCalendar>
              <input
                id="datepicker-format"
                datepicker
                datepicker-min-date="09/16/2024"
                datepicker-max-date="12/31/2099"
                type="text"
                class="w-full p-4 bg-gray-50 border-0 focus:ring-0"
                placeholder="Deadline auswählen"
              />
            </div>
          </div>

          <div class="mb-2">
            <h2 class="text-sm font-medium pb-4">Projektstatus festlegen</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div
                :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'DRAFT'
                }"
                class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                @click="selectStatus('DRAFT')"
              >
                <IconPencil class="w-4 h-4"></IconPencil>
                <span class="ml-2 block text-sm font-medium text-gray-700">ENTWURF</span>
              </div>

              <div
                :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'OPEN'
                }"
                class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                @click="selectStatus('OPEN')"
              >
                <IconFolder class="w-4 h-4"></IconFolder>
                <span class="ml-2 block text-sm font-medium text-gray-700">OFFEN</span>
              </div>

              <div
                  :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'IN_PROGRESS'
                }"
                  class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                  @click="selectStatus('IN_PROGRESS')"
              >
                <IconAgil class="w-4 h-4"></IconAgil>
                <span class="ml-2 block text-sm font-medium text-gray-700">in Bearbeitung</span>
              </div>

              <div
                  :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'COMPLETED'
                }"
                  class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                  @click="selectStatus('COMPLETED')"
              >
                <IconCheck class="w-4 h-4"></IconCheck>
                <span class="ml-2 block text-sm font-medium text-gray-700">Abgeschlossen</span>
              </div>

              <div
                  :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'CANCELLED'
                }"
                  class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                  @click="selectStatus('CANCELLED')"
              >
                <IconBan class="w-4 h-4"></IconBan>
                <span class="ml-2 block text-sm font-medium text-gray-700">Abgebrochen</span>
              </div>

              <div
                  :class="{
                  'border-blue-600 border-2 bg-gray-50': editableProject.projectStatus === 'ARCHIVED'
                }"
                  class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                  @click="selectStatus('ARCHIVED')"
              >
                <IconArchive class="w-4 h-4"></IconArchive>
                <span class="ml-2 block text-sm font-medium text-gray-700">Archiviert</span>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold my-4">Projektansprechpartner</h2>
              <button
                type="button"
                class="hidden bg-gray-400 hover:bg-gray-500 rounded-lg px-3 py-2 text-white"
              >
                Daten aus Profil übernehmen
              </button>
            </div>

            <div class="w-full mb-4">
              <label for="name" class="block text-sm font-medium pb-1">Name</label>
              <div
                class="inline-flex items-center w-full bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
              >
                <IconUser class="w-4 h-4 ml-4 mr-0"></IconUser>
                <input
                  v-model="editableProject.projectRepresentative"
                  type="text"
                  id="name"
                  class="w-full p-4 bg-gray-50 border-0 focus:ring-0"
                  placeholder="Matteo Kleemann"
                  required
                />
              </div>
            </div>
            <div class="w-full">
              <label for="name" class="block text-sm font-medium pb-1">E-Mail</label>
              <div
                class="inline-flex items-center w-full bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
              >
                <IconEmail class="w-5 h-5 ml-4 mr-0"></IconEmail>
                <input
                  v-model="editableProject.projectRepresentativeEmail"
                  type="email"
                  id="name"
                  class="w-full p-4 bg-gray-50 border-0 focus:ring-0"
                  placeholder="matteoachim.kleemann@dataport.de"
                  required
                />
              </div>
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <button
              type="button"
              @click="submitEditProject"
              data-drawer-hide="drawer-full-example"
              class="inline-flex items-center bg-primary-700 rounded-lg px-4 py-2.5 text-white"
            >
              <IconSubmit class="w-5 h-5 mr-4 font-normal"></IconSubmit>
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {initFlowbite} from "flowbite";
import ProjectInfo from '@/components/project/actions/read/ProjectInfo.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import { useProjectStore } from '@/stores/projectStore.js';
import IconSubmit from '@/components/icons/IconSubmit.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconUser from '@/components/navigation/header/profile/icons/IconUser.vue';
import IconFolder from '@/components/home/icons/IconFolder.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';
import IconList from '@/components/home/icons/IconList.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';

import {useProjectTypeStore} from "@/stores/projectTypeStore.js";
import {useTechnologyStore} from "@/stores/technologyStore.js";
import {useSoftSkillStore} from "@/stores/softSkillStore.js";
import {useHardSkillStore} from "@/stores/hardSkillStore.js";
import {useSnackbarStore} from "@/stores/snackbarStore.js";

import IconAgil from "@/components/icons/technology/IconAgil.vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import IconBan from "@/components/icons/IconBan.vue";
import IconArchive from "@/components/icons/IconArchive.vue";
export default {
  name: 'ProjectDrawer',
  setup() {
    const projectStore = useProjectStore();
    const projectTypeStore = useProjectTypeStore();
    projectTypeStore.fetchProjectTypes();
    const technologyStore = useTechnologyStore();
    technologyStore.fetchTechnologies();
    const softSkillStore = useSoftSkillStore();
    softSkillStore.fetchSoftSkills();
    const hardSkillStore = useHardSkillStore();
    hardSkillStore.fetchHardSkills();
    const snackbarStore = useSnackbarStore();
    return {
      projectStore,
      projectTypeStore,
      technologyStore,
      softSkillStore,
      hardSkillStore,
      snackbarStore
    };
  },
  components: {
    IconArchive,
    IconBan,
    IconCheck,
    IconAgil,
    IconChevronDown,
    IconList,
    IconCalendar,
    IconFolder,
    IconUser,
    IconEmail,
    IconSubmit,
    IconPencil,
    IconClose,
    ProjectInfo
  },
  props: {
    isDrawerOpen: Boolean
  },
  data() {
    return {
      isEditing: false,
      editableProject: null,
      isDropDownTechnologiesOpen: false,
      isDropDownProjectTypeOpen: false,
      isDropDownHardSkillsOpen: false,
      isDropDownSoftSkillsOpen: false,
      selectedTechnologies: [],
      selectedProjectTypes: [],
      selectedHardSkills: [],
      selectedSoftSkills: [],
      selectedProjectStatus: '',
    };
  },
  methods: {
    closeProject() {
      this.$emit('closeDrawer');
      this.resetEditableProject();
    },
    resetEditableProject() {
      this.isEditing = false;
      this.editableProject = null;
    },
    editProject() {
      this.isEditing = true;
      this.editableProject = this.projectStore.selectedProject;
      console.log(this.editableProject);
      this.initializeSelection();
    },
    initializeSelection() {
      this.selectedTechnologies = this.editableProject.projectTechnologies.map(t => t.technologyValue);
      this.selectedProjectTypes = this.editableProject.projectTypes.map(p => p.projectTypeValue);
      this.selectedHardSkills = this.editableProject.projectHardSkills.map(h => h.hardSkillValue);
      this.selectedSoftSkills = this.editableProject.projectSoftSkills.map(s => s.softSkillValue);
    },
    updateProjectTechnologies() {
      this.editableProject.projectTechnologies = this.technologyStore.technologies.filter(technology =>
          this.selectedTechnologies.includes(technology.technologyValue)
      );
    },
    updateProjectTypes() {
      this.editableProject.projectTypes = this.projectTypeStore.projectTypes.filter(projectType =>
          this.selectedProjectTypes.includes(projectType.projectTypeValue)
      );
    },
    updateProjectHardSkills() {
      this.editableProject.projectHardSkills = this.hardSkillStore.hardSkills.filter(hardSkill =>
          this.selectedHardSkills.includes(hardSkill.hardSkillValue)
      );
    },
    updateProjectSoftSkills() {
      this.editableProject.projectSoftSkills = this.softSkillStore.softSkills.filter(softSkill =>
          this.selectedSoftSkills.includes(softSkill.softSkillValue)
      );
    },
    submitEditProject() {
      this.updateProjectTechnologies();
      this.updateProjectTypes();
      this.updateProjectHardSkills();
      this.updateProjectSoftSkills();
      console.log(this.editableProject);
      this.projectStore.updateProject(this.editableProject.projectId, this.editableProject);
      this.snackbarStore.showSnackbar('Projekt wurde erfolgreich aktualisiert!', 'success', 5000);
      this.closeProject();

    },
    selectStatus(status) {
      this.editableProject.projectStatus = status;
    }
  },
  mounted() {
    initFlowbite();
  }
};
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.5s ease;
}
.drawer-enter,
.drawer-leave-to {
  transform: translateX(100%);
}
.drawer-enter-to,
.drawer-leave {
  transform: translateX(0);
}
</style>
