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
          <ProjectNewModal></ProjectNewModal>
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
        <div v-if="filterProjects.length == 0">
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
          v-for="project in filterProjects"
          :key="project.id"
          @click="selectProject(project)"
          :class="[
            'group border hover:border-blue-500 rounded-xl hover:shadow-xl duration-300 transition-all lg:my-6 my-4 lg:mx-0 mx-4 lg:py-6 py-4 px-8',
            selectedProject && selectedProject.id === project.id
              ? 'group border-2 border-blue-500 rounded-xl hover:shadow-xl duration-300 transition-all lg:my-6 my-4 lg:mx-0 mx-4 lg:py-6 py-4 px-8'
              : ''
          ]"
        >
          <div
            class="flex lg:flex-row flex-col lg:items-center items-start justify-between space-y-2"
          >
            <IconLightbulb
              class="text-gray-400 h-12 bg-gray-100 rounded-full shrink-0 grow-0 p-2 avatar aspect-square"
            ></IconLightbulb>
            <div class="flex flex-col justify-center text-left lg:w-[200px]">
              <p
                class="text-gray-800 text-lg font-medium group-hover:font-bold group-hover:text-blue-600"
              >
                {{ project.title }}
              </p>
              <p class="text-gray-400">TQ6 – Altenholz</p>
            </div>
            <div class="flex flex-col justify-center text-left lg:w-[200px]">
              <p class="text-gray-600">Matteo Kleemann</p>
              <p class="text-gray-400 text-sm">matteo.kleemann@dataport.de</p>
            </div>
            <div class="flex flex-row justify-center items-center">
              <p
                class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500"
              >
                Vue
              </p>
              <p
                class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg mr-2 group-hover:bg-blue-500"
              >
                React
              </p>
              <p
                class="bg-gray-300 text-white text-xs uppercase py-2 px-4 rounded-lg group-hover:bg-blue-500"
              >
                Spring Boot
              </p>
            </div>
            <div class="flex flex-col justify-center text-left">
              <p class="text-gray-400 text-sm">16.10.2024</p>
            </div>
            <div>
              <!--
                <button
                    type="button"
                    @click="clear"
                    class="bg-blue-600 shadow-md shadow-blue-600/50 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
                >Ansehen</button>
                -->
              <ProjectDrawer
                :project="selectedProject"
                @closeProject="closeProject"
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
import IconLightbulb from '@/components/project2/icons/IconLightbulb.vue'
import ProjectDrawer from '@/components/project2/ProjectDrawer.vue'
import IconError from '@/components/project2/icons/IconError.vue'
import ProjectNewModal from '@/components/project2/ProjectNewModal.vue'
export default {
  name: 'ProjectList',
  components: { ProjectNewModal, IconError, ProjectDrawer, IconLightbulb },
  props: ['searchQuery'],
  data() {
    return {
      projectViewLimit: 5,
      projects: [
        {
          id: 1,
          title: 'Marktpreise 2024',
          company: 'TQ6',
          location: 'Altenholz'
        },
        {
          id: 2,
          title: 'dProjektbörse',
          company: 'DS44',
          location: 'Halle (Saale)'
        },
        {
          id: 3,
          title: 'Konfiguration Manager2 (m/w/d) Beta',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 4,
          title: 'Konfiguration Manager3 (m/w/d) Gamma',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 5,
          title: 'Konfiguration Manager4 (m/w/d) Epsilon',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 6,
          title: 'Konfiguration Manager5 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 7,
          title: 'Konfiguration Manager6 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 8,
          title: 'Konfiguration Manager4 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 9,
          title: 'Konfiguration Manager5 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 10,
          title: 'Konfiguration Manager6 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 11,
          title: 'Konfiguration Manager4 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 12,
          title: 'Konfiguration Manager5 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        },
        {
          id: 13,
          title: 'Konfiguration Manager6 (m/w/d)',
          company: 'TeamPower GmbH',
          location: 'Pforzheim'
        }
      ],
      selectedProject: null
    }
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project
      this.$emit('selectProject', project)
      console.log(project)
    },
    closeProject() {
      this.selectedProject = null
    },
    showAllProjects() {
      this.projectViewLimit = -1
    },
    showLessProjects() {
      this.projectViewLimit = 5
    }
  },
  computed: {
    filterProjects() {
      let filteredProjects

      if (this.searchQuery !== '' && this.searchQuery !== undefined) {
        filteredProjects = this.projects.filter((project) => {
          const query = this.searchQuery.toLowerCase()
          return (
            project.title.toLowerCase().includes(query) ||
            project.company.toLowerCase().includes(query) ||
            project.location.toLowerCase().includes(query)
          )
        })
      } else {
        filteredProjects = this.projects
      }
      if (this.projectViewLimit > 0) {
        return filteredProjects.slice(0, this.projectViewLimit)
      } else {
        return filteredProjects
      }
    }
  }
}
</script>

<style scoped></style>
