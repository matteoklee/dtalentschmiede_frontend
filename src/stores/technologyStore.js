import { defineStore } from 'pinia';
import {
    getAllTechnologies,
    createTechnology,
    deleteTechnology,
    updateTechnology,
} from '@/services/technologyService.js';
import {markRaw} from "vue";
import IconVue from "@/components/icons/technology/IconVue.vue";
import IconJava from "@/components/icons/technology/IconJava.vue";
import IconJavascript from "@/components/icons/technology/IconJavascript.vue";
import IconOther from "@/components/icons/IconOther.vue";

export const useTechnologyStore = defineStore('technologyStore', {
    state: () => ({
        technologies: [],
    }),
    actions: {
        async fetchTechnologies() {
            try {
                const technologies = await getAllTechnologies();
                //this.technologies = technologies;
                this.technologies = technologies.map(tech => {
                    switch (tech.technologyValue) {
                        case 'VUE_JS':
                            return { ...tech, icon: markRaw(IconVue) };
                        case 'JAVA':
                            return { ...tech, icon: markRaw(IconJava) };
                        case 'JAVASCRIPT':
                            return { ...tech, icon: markRaw(IconJavascript) };
                        default:
                            return { ...tech, icon: markRaw(IconOther) };
                    }
                });
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
