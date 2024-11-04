import { defineStore } from 'pinia';
import {
  getAllTechnologies,
  createTechnology,
  deleteTechnology,
  updateTechnology
} from '@/services/technologyService.js';

export const useTechnologyStore = defineStore('technologyStore', {
  state: () => ({
    technologies: []
  }),
  actions: {
    async fetchTechnologies() {
      try {
        if(this.technologies.length > 0) {
          return this.technologies;
        }
        const technologies = await getAllTechnologies();
        this.technologies = technologies;
      } catch (error) {
        console.error('error fetching technologies:', error);
      }
    },
    async addTechnology(technologyData) {
      try {
        const newTechnology = await createTechnology(technologyData);
        this.technologies.push(newTechnology);
      } catch (error) {
        console.error('error adding technology:', error);
      }
    },
    async deleteTechnology(technologyId) {
      try {
        await deleteTechnology(technologyId);
        this.technologies = this.technologies.filter((t) => t.technologyId !== technologyId);
      } catch (error) {
        console.error('error deleting technology:', error);
      }
    },
    async updateTechnology(technologyId, technologyData) {
      try {
        const updatedTechnology = await updateTechnology(technologyId, technologyData);
        const index = this.technologies.findIndex((t) => t.technologyId === technologyId);
        if (index !== -1) {
          this.technologies.splice(index, 1, updatedTechnology);
        }
      } catch (error) {
        console.error('error updating technology:', error);
      }
    }
  }
});
