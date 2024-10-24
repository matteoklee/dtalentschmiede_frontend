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
    selectedProject: null
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
    }
  },
  getters: {
    filteredProjects: (state) => {
      if (state.searchQuery === '') {
        return state.projects;
      }
      const query = state.searchQuery.toLowerCase();
      return state.projects.filter(
        (project) =>
          project.projectTitle.toLowerCase().includes(query) ||
          project.projectDescription.toLowerCase().includes(query)
      );
    }
  }
});
