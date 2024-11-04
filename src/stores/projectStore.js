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
            return new Date(b.projectCreatedAt) - new Date(a.projectCreatedAt);
          } else if (state.sortBy === 'updatedAt') {
            if (!a.projectUpdatedAt && !b.projectUpdatedAt) return 0;
            if (!a.projectUpdatedAt) return 1;
            if (!b.projectUpdatedAt) return -1;
            return new Date(a.projectUpdatedAt) - new Date(b.projectUpdatedAt);
          } else if (state.sortBy === 'projectType') {
            const typeA = a.projectTypes?.[0]?.projectTypeName || '';
            const typeB = b.projectTypes?.[0]?.projectTypeName || '';
            return typeA.localeCompare(typeB);
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
