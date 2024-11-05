<template>
  <div>

    <!-- bg-black bg-gradient-to-r from-purple-800/50 from-10% via-indigo-700/50 via-30% to-blue-900/50 to-90%     bg-slate-900 -->
    <div
      id="drawer-full-example"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-gray-50 w-full translate-x-full bg-gray-50"
      tabindex="-1"
      aria-labelledby="drawer-full-label"
    >
      <div class="">
        <div class="max-w-screen-xl mx-auto justify-center items-center">
          <div class="my-4 w-full flex justify-between items-center">
            <div class="">
              <HeaderLogo class=""></HeaderLogo>
            </div>

            <div class="">
              <button
                type="button"
                @click="closeDrawer"
                data-drawer-hide="drawer-full-example"
                aria-controls="drawer-full-example"
                class="text-gray-400 bg-transparent hover:text-gray-800 rounded-lg inline-flex items-center justify-center"
              >
                <!-- absolute top-2.5 end-2.5  -->
                <IconClose class="h-8 w-8"></IconClose>
                <span class="sr-only">Close menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto w-full">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto">
          <div class="flex flex-col justify-center items-start">
            <div>
              <p class="text-5xl font-bold text-left py-4">
                Erstelle ein neues <span class="text-primary-700">IT-Projekt</span> oder kreiere
                eine neue <span class="text-primary-700">Idee</span>.
              </p>
            </div>
            <p class="py-2 text-lg">Fülle dein Projekt mit Leben.</p>
          </div>
          <div>
            <img src="@/assets/img_5.png" />
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto w-full">
        <hr class="h-px my-8 bg-gray-300 border-0 rounded-lg" />
      </div>

      <div v-if="true" class="max-w-screen-xl mx-auto w-full my-4">
        <div class="bg-blue-200 rounded-lg p-4 text-center">
          <div class="inline-flex items-center text-blue-700">
            <IconInfo class="w-4 h-4 mr-4"></IconInfo>
            <p class="text-black">Gib deinem Projekt einen Titel.</p>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto w-full">
        <div class="w-full">
          <h2 class="text-xl font-bold my-4">Projektname</h2>
          <div
            class="flex items-center space-x-2 bg-white py-4 my-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
          >
            <div class="flex items-center space-x-2 w-full relative mr-2">
              <IconFile class="h-5 text-gray-400"></IconFile>
              <input
                v-model="project.projectTitle"
                type="text"
                id="projectSearch"
                placeholder="Titel des Projekts"
                required
                class="border-0 text-xl w-full outline-none focus:ring-0 placeholder-gray-300 pr-6 font-medium text-center"
                :disabled="titleValidated"
              />
              <button v-if="!titleValidated" @click="clear" type="button" class="absolute right-0">
                <IconClose class="h-5 w-5 text-gray-400 hover:text-gray-600"></IconClose>
              </button>
              <button
                v-else
                type="button"
                @click="resetTitle"
                class="absolute right-0"
                data-tooltip-target="tooltip-animation"
              >
                <IconClose class="h-5 w-5 text-gray-400 hover:text-red-700"></IconClose>
              </button>
            </div>
            <button
              v-if="!titleValidated"
              type="button"
              @click="validateTitle"
              class="hidden bg-primary-600 shadow-lg shadow-primary-600/50 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition"
            >
              Bestätigen
            </button>
          </div>

          <div
            id="tooltip-animation"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Titel zurücksetzen
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <p class="text-gray-400 font-normal text-md py-2">
            Example:
            <span class="border px-3 py-1 mx-2 rounded-md">Marktpreise</span>
            <span class="border px-3 py-1 mx-2 rounded-md">Plugin Excel</span>
            <span class="border px-3 py-1 mx-2 rounded-md">Access DB Update</span>
          </p>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto w-full my-8">
          <div class="p-4 w-full bg-white rounded-lg shadow-lg">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">

              <div class="lg:border-r-2 lg:border-0 lg:px-4">
                <h2 class="text-xl font-bold my-4">Kategorie</h2>

                <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
                  <div
                    v-for="(type, index) in projectTypeStore.projectTypes"
                    :key="type.projectTypeId"
                  >
                    <input
                      type="checkbox"
                      v-model="selectedProjectType"
                      :id="`projectType-${index}`"
                      :value="type"
                      class="hidden peer"
                    />
                    <label
                      :for="`projectType-${index}`"
                      class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                      :class="selectedProjectType.includes(type) ? 'bg-gray-100' : 'bg-white'"
                    >
                      <div
                        class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                      >
                        <component
                          :is="getProjectTypeIcon(type.projectTypeValue)"
                          class="w-10 h-10"
                          :class="
                            selectedProjectType.includes(type) ? 'text-blue-600' : 'text-gray-300'
                          "
                        ></component>
                        <span class="text-lg font-medium text-gray-700 pt-2">{{
                          type.projectTypeName
                        }}</span>
                      </div>
                      <IconCheck
                        v-if="selectedProjectType.includes(type)"
                        class="w-6 h-6 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                      ></IconCheck>
                    </label>
                  </div>
                </div>

                <h2 class="text-xl font-bold my-4">Technologien</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">
                  <div
                    v-for="(item, index) in technologyStore.technologies"
                    :key="item.technologyId"
                  >
                    <!-- Technology -->
                    <div class="">
                      <input
                        type="checkbox"
                        v-model="selectedTechnologies"
                        :id="`technology-${index}`"
                        :value="item"
                        class="hidden peer"
                      />
                      <label
                        :for="`technology-${index}`"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedTechnologies.includes(item) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div
                          class="inline-flex flex-col items-center my-2 mt-auto break-all text-center"
                        >
                          <component
                            :is="getTechnologyIcon(item.technologyValue)"
                            class="w-8 h-8"
                            :class="
                              selectedTechnologies.includes(item)
                                ? 'text-blue-600'
                                : 'text-gray-300'
                            "
                          ></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{
                            item.technologyName
                          }}</span>
                        </div>
                        <IconCheck
                          v-if="selectedTechnologies.includes(item)"
                          class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>
                </div>

                <h2 class="text-xl font-bold my-4">Hard Skills</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">
                  <div v-for="(item, index) in hardSkillStore.hardSkills" :key="item.hardSkillId">
                    <!-- Technology -->
                    <div class="">
                      <input
                        type="checkbox"
                        v-model="selectedHardSkills"
                        :id="`hardSkill-${index}`"
                        :value="item"
                        class="hidden peer"
                      />
                      <label
                        :for="`hardSkill-${index}`"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedHardSkills.includes(item) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div class="inline-flex flex-col items-center my-2 mt-auto text-center">
                          <component
                            :is="getHardSkillIcon(item.hardSkillValue)"
                            class="w-8 h-8"
                            :class="
                              selectedHardSkills.includes(item) ? 'text-blue-600' : 'text-gray-300'
                            "
                          ></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{
                            item.hardSkillName
                          }}</span>
                        </div>
                        <IconCheck
                          v-if="selectedHardSkills.includes(item)"
                          class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>
                </div>

                <h2 class="text-xl font-bold my-4">Soft Skills</h2>

                <div class="grid lg:grid-cols-6 grid-cols-3 gap-4 mb-4">
                  <div v-for="(item, index) in softSkillStore.softSkills" :key="item.softSkillId">
                    <!-- Technology -->
                    <div class="">
                      <input
                        type="checkbox"
                        v-model="selectedSoftSkills"
                        :id="`softSkill-${index}`"
                        :value="item"
                        class="hidden peer"
                      />
                      <label
                        :for="`softSkill-${index}`"
                        class="relative cursor-pointer flex flex-col items-center justify-between py-2 rounded-lg hover:bg-gray-100 peer-checked:border-blue-600 peer-checked:border aspect-square"
                        :class="selectedSoftSkills.includes(item) ? 'bg-gray-100' : 'bg-white'"
                      >
                        <div class="inline-flex flex-col items-center my-2 mt-auto text-center">
                          <component
                            :is="getSoftSkillIcon(item.softSkillValue)"
                            class="w-8 h-8"
                            :class="
                              selectedSoftSkills.includes(item) ? 'text-blue-600' : 'text-gray-300'
                            "
                          ></component>

                          <span class="text-sm font-medium text-gray-700 pt-2">{{
                            item.softSkillName
                          }}</span>
                        </div>
                        <IconCheck
                          v-if="selectedSoftSkills.includes(item)"
                          class="w-4 h-4 absolute top-1 right-1 bg-blue-500 rounded-full p-1 text-white"
                        ></IconCheck>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2">
                <h2 class="text-xl font-bold my-4">Eigenschaften</h2>

                <div class="hidden mb-4">
                  <label for="name" class="block text-sm font-medium pb-1">Projektname *</label>
                  <input
                    type="text"
                    id="name"
                    class="w-full p-4 bg-gray-50 border-0 rounded-lg shadow-md focus:ring-0"
                    placeholder="Untitled project"
                  />
                </div>

                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium pb-1"
                    >Projektbeschreibung *</label
                  >
                  <div
                    class="flex items-center space-x-2 bg-gray-50 py-4 px-4 rounded-lg shadow-md text-gray-900 hover:scale-100 duration-300"
                  >
                    <div class="w-full relative">
                      <IconList class="h-5 absolute left-0 top-3"></IconList>
                      <textarea
                        v-model="project.projectDescription"
                        id="description"
                        rows="16"
                        class="pl-8 block p-2.5 w-full border-0 focus:ring-0 bg-transparent"
                        placeholder="Das Projekt BeispielXY soll ... (Requirements, Environment, Tasks, TechStack)"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="hidden mb-4">
                  <label for="device" class="block text-sm font-medium pb-1">Auswahl *</label>
                  <select
                    id="device"
                    class="w-full p-4 border rounded-lg text-lg focus:ring-0 bg-gray-50 border-0 shadow-md"
                  >
                    <option value="web-1366">Web 1366</option>
                    <option value="web-1920">Web 1920</option>
                    <option value="mobile-360">Mobile 360</option>
                  </select>
                </div>

                <div class="hidden mb-4">
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
                  <div class="flex space-x-4">
                    <div
                      :class="{ 'border-blue-600 border-2 bg-gray-50': selectedStatus === 'DRAFT' }"
                      class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                      @click="selectStatus('DRAFT')"
                    >
                      <IconPencil class="w-4 h-4"></IconPencil>
                      <span class="ml-2 block text-sm font-medium text-gray-700">ENTWURF</span>
                    </div>

                    <div
                      :class="{ 'border-blue-600 border-2 bg-gray-50': selectedStatus === 'OPEN' }"
                      class="flex items-center border rounded-lg px-4 hover:bg-gray-50 py-2 w-full cursor-pointer"
                      @click="selectStatus('OPEN')"
                    >
                      <IconFolder class="w-4 h-4"></IconFolder>
                      <span class="ml-2 block text-sm font-medium text-gray-700">OFFEN</span>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold my-4">Projektansprechpartner</h2>
                    <button
                      type="button"
                      disabled
                      class="bg-gray-400 rounded-lg px-3 py-2 text-white"
                    > <!--  hover:bg-gray-500 -->
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
                        v-model="project.projectRepresentative"
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
                        v-model="project.projectRepresentativeEmail"
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
                    @click="clearInput"
                    data-drawer-hide="drawer-full-example"
                    class="inline-flex items-center bg-gray-400 rounded-lg px-4 py-2.5 text-white mr-2"
                  >
                    <IconClose class="w-5 h-5 mr-4 font-normal"></IconClose>
                    Abbrechen
                  </button>
                  <button
                      type="button"
                      @click="submit"
                      data-drawer-hide="drawer-full-example"
                      class="inline-flex items-center bg-primary-700 rounded-lg px-4 py-2.5 text-white"
                  >
                    <IconSubmit class="w-5 h-5 mr-4 font-normal"></IconSubmit>
                    Erstellen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <FooterInfo></FooterInfo>
        <FooterNav></FooterNav>
        <FooterCopyright></FooterCopyright>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite';
import IconClose from '@/components/icons/IconClose.vue';
import HeaderLogo from '@/components/navigation/header/HeaderLogo.vue';
import FooterCopyright from '@/components/navigation/footer/FooterCopyright.vue';
import FooterNav from '@/components/navigation/footer/FooterNav.vue';
import FooterInfo from '@/components/navigation/footer/FooterInfo.vue';
import IconFile from '@/components/icons/IconFile.vue';
import IconList from '@/components/home/icons/IconList.vue';
import IconInfo from '@/components/icons/IconInfo.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import IconBook from '@/components/icons/IconBook.vue';
import IconSubmit from '@/components/icons/IconSubmit.vue';

import IconEmail from '@/components/icons/IconEmail.vue';
import IconUser from '@/components/navigation/header/profile/icons/IconUser.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';
import IconFolder from '@/components/home/icons/IconFolder.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import {
  getTechnologyIcon,
  getProjectTypeIcon,
  getHardSkillIcon,
  getSoftSkillIcon
} from '@/utils/iconUtil.js';

import { useProjectStore } from '@/stores/projectStore.js';
import { useTechnologyStore } from '@/stores/technologyStore.js';
import { useProjectTypeStore } from '@/stores/projectTypeStore.js';
import { useHardSkillStore } from '@/stores/hardSkillStore.js';
import { useSoftSkillStore } from '@/stores/softSkillStore.js';
export default {
  name: 'ProjectCreateDrawer',
  setup() {
    const projectStore = useProjectStore();
    const technologyStore = useTechnologyStore();
    technologyStore.fetchTechnologies();
    const projectTypeStore = useProjectTypeStore();
    projectTypeStore.fetchProjectTypes();
    const hardSkillStore = useHardSkillStore();
    hardSkillStore.fetchHardSkills();
    const softSkillStore = useSoftSkillStore();
    softSkillStore.fetchSoftSkills();

    return {
      projectStore,
      technologyStore,
      projectTypeStore,
      hardSkillStore,
      softSkillStore
    };
  },
  components: {
    IconPencil,
    IconFolder,
    IconCalendar,
    IconUser,
    IconEmail,
    IconSubmit,
    IconBook,
    IconCheck,
    IconInfo,
    IconList,
    IconFile,
    FooterInfo,
    FooterNav,
    FooterCopyright,
    HeaderLogo,
    IconClose
  },
  data() {
    return {
      isDrawerOpen: false,
      title: '',
      titleValidated: false,
      selectedProjectType: [],
      selectedHardSkills: [],
      selectedSoftSkills: [],
      selectedTechnologies: [],
      selectedStatus: 'DRAFT',

      project: {
        projectTitle: '',
        projectDescription: '',
        projectRepresentative: '',
        projectRepresentativeEmail: '',
        projectTypes: [],
        projectHardSkills: [],
        projectSoftSkills: [],
        projectTechnologies: [],
        projectStatus: ''
      }
    };
  },
  methods: {
    getTechnologyIcon,
    getProjectTypeIcon,
    getHardSkillIcon,
    getSoftSkillIcon,
    validateTitle() {
      this.titleValidated = this.title !== '';
    },
    resetTitle() {
      this.titleValidated = false;
      this.title = '';
    },
    clear() {
      this.title = '';
    },
    selectStatus(status) {
      this.selectedStatus = status;
    },
    submit() {
      if (
        this.project.projectTitle &&
        this.project.projectDescription &&
        this.project.projectRepresentative &&
        this.project.projectRepresentativeEmail
      ) {
        this.project.projectTypes = this.selectedProjectType;
        this.project.projectTechnologies = this.selectedTechnologies;
        this.project.projectHardSkills = this.selectedHardSkills;
        this.project.projectSoftSkills = this.selectedSoftSkills;
        this.project.projectStatus = this.selectedStatus;
        this.createProject();
      } else {
        console.error('input data for new project is incomplete.');
        //show snackbar
      }
    },
    createProject() {
      this.projectStore.addProject(this.project);
      this.$emit('submitProject', true);
      this.clearInput();
    },
    clearInput() {
      this.project = {
        projectTitle: '',
        projectDescription: '',
        projectRepresentative: '',
        projectRepresentativeEmail: '',
        projectTypes: [],
        projectHardSkills: [],
        projectSoftSkills: [],
        projectTechnologies: [],
        projectStatus: ''
      };
      this.selectedTechnologies = [];
      this.selectedHardSkills = [];
      this.selectedSoftSkills = [];
    }
  },
  mounted() {
    initFlowbite();
  }
};
</script>

<style scoped></style>
