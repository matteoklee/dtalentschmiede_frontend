import { defineStore } from 'pinia';
import {
    getAllProjectTypes,
    createProjectType,
    deleteProjectType,
    updateProjectType,
} from '@/services/projectTypeService.js';

export const useProjectTypeStore = defineStore('projectTypeStore', {
    state: () => ({
        projectTypes: [],
    }),
    actions: {
        async fetchProjectTypes() {
            try {
                const projectTypes = await getAllProjectTypes();
                this.projectTypes = projectTypes;
            } catch (error) {
                console.error('error fetching project types:', error);
            }
        },
        async addProjectType(projectTypeData) {
            try {
                const newProjectType = await createProjectType(projectTypeData);
                this.projectTypes.push(newProjectType);
            } catch (error) {
                console.error('error adding project type:', error);
            }
        },
        async deleteProjectType(projectTypeId) {
            try {
                await deleteProjectType(projectTypeId);
                this.projectTypes = this.projectTypes.filter((t) => t.projectTypeId !== projectTypeId);
            } catch (error) {
                console.error('error deleting project type:', error);
            }
        },
        async updateProjectType(projectTypeId, projectTypeData) {
            try {
                const updatedProjectType = await updateProjectType(projectTypeId, projectTypeData);
                const index = this.projectTypes.findIndex((t) => t.projectTypeId === projectTypeId);
                if (index !== -1) {
                    this.projectTypes.splice(index, 1, updatedProjectType);
                }
            } catch (error) {
                console.error('error updating project type:', error);
            }
        }
    }
});
