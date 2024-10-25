
import { defineStore } from 'pinia';
import {
    getAllSoftSkills,
    createSoftSkill,
    deleteSoftSkill,
    updateSoftSkill,
} from '@/services/softSkillService.js';

export const useSoftSkillStore = defineStore('softSkillStore', {
    state: () => ({
        softSkills: [],
    }),
    actions: {
        async fetchSoftSkills() {
            try {
                const softSkills = await getAllSoftSkills();
                this.softSkills = softSkills;
            } catch (error) {
                console.error('error fetching soft skills:', error);
            }
        },
        async addSoftSkill(softSkillData) {
            try {
                const newSoftSkill = await createSoftSkill(softSkillData);
                this.softSkills.push(newSoftSkill);
            } catch (error) {
                console.error('error adding soft skill:', error);
            }
        },
        async deleteSoftSkill(softSkillId) {
            try {
                await deleteSoftSkill(softSkillId);
                this.softSkills = this.softSkills.filter((s) => s.softSkillId !== softSkillId);
            } catch (error) {
                console.error('error deleting soft skill:', error);
            }
        },
        async updateSoftSkill(softSkillId, softSkillData) {
            try {
                const updatedSoftSkill = await updateSoftSkill(softSkillId, softSkillData);
                const index = this.softSkills.findIndex((s) => s.softSkillId === softSkillId);
                if (index !== -1) {
                    this.softSkills.splice(index, 1, updatedSoftSkill);
                }
            } catch (error) {
                console.error('error updating soft skill:', error);
            }
        }
    }
});
