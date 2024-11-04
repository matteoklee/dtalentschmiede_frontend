import { defineStore } from 'pinia';
import {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject
} from '@/services/projectService.js';

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [],
    searchQuery: '',
    selectedProject: null,
    filteredTechnologies: [],
    filteredHardSkills: [],
    filteredSoftSkills: [],
    filteredProjectTypes: [],
    sortBy: null
  }),
  actions: {
    async fetchProjects() {
      try {
        const projects = await getAllProjects();
        this.projects = projects;
      } catch (error) {
        console.error('error fetching projects:', error);
      }
    },
    async addProject(projectData) {
      try {
        const newProject = await createProject(projectData);
        this.projects.push(newProject);
      } catch (error) {
        console.error('error adding project:', error);
      }
    },
    async deleteProject(projectId) {
      try {
        await deleteProject(projectId);
        this.projects = this.projects.filter((p) => p.id !== projectId);
      } catch (error) {
        console.error('error deleting project:', error);
      }
    },
    async updateProject(projectId, projectData) {
      try {
        const updatedProject = await updateProject(projectId, projectData);
        const index = this.projects.findIndex((p) => p.id === projectId);
        if (index !== -1) {
          this.projects.splice(index, 1, updatedProject);
        }
      } catch (error) {
        console.error('error updating project:', error);
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    setSelectedProject(project) {
      this.selectedProject = project;
    },
    setSortBy(value) {
      console.log(value);
      this.sortBy = value;
    },
    setFilteredTechnologies(technologies) {
      this.filteredTechnologies = technologies;
    },
    setFilteredHardSkills(hardSkills) {
      this.filteredHardSkills = hardSkills;
    },
    setFilteredSoftSkills(softSkills) {
      this.filteredSoftSkills = softSkills;
    }
  },
  getters: {
    filteredProjects: (state) => {
      let filtered = state.projects;

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(
            (project) =>
                project.projectTitle.toLowerCase().includes(query) ||
                project.projectDescription.toLowerCase().includes(query)
        );
      }

      if (state.filteredTechnologies.length > 0) {
        filtered = filtered.filter(project =>
            project.projectTechnologies.some(tech =>
                state.filteredTechnologies.includes(tech.technologyValue)
            )
        );
      }

      if (state.filteredHardSkills.length > 0) {
        filtered = filtered.filter(project =>
            project.projectHardSkills.some(skill =>
                state.filteredHardSkills.includes(skill.hardSkillValue)
            )
        );
      }

      if (state.filteredSoftSkills.length > 0) {
        filtered = filtered.filter(project =>
            project.projectSoftSkills.some(skill =>
                state.filteredSoftSkills.includes(skill.softSkillValue)
            )
        );
      }

      if (state.sortBy) {
        filtered = [...filtered].sort((a, b) => {
          if (state.sortBy === 'createdAt') {
            return new Date(a.createdAt) - new Date(b.createdAt);
          } else if (state.sortBy === 'updatedAt') {
            return new Date(a.updatedAt) - new Date(b.updatedAt);
          } else if (state.sortBy === 'projectType') {
            return a.projectType.localeCompare(b.projectType);
          }
        });
      }

      return filtered;
      /*
      if (state.searchQuery === '') {
        return state.projects;
      }
      const query = state.searchQuery.toLowerCase();
      return state.projects.filter(
        (project) =>
          project.projectTitle.toLowerCase().includes(query) ||
          project.projectDescription.toLowerCase().includes(query)
      );
       */
    }
  }
});
