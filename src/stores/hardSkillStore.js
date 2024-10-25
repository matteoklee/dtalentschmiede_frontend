import { defineStore } from 'pinia';
import {
  getAllHardSkills,
  createHardSkill,
  deleteHardSkill,
  updateHardSkill
} from '@/services/hardSkillService.js';

export const useHardSkillStore = defineStore('hardSkillStore', {
  state: () => ({
    hardSkills: []
  }),
  actions: {
    async fetchHardSkills() {
      try {
        const hardSkills = await getAllHardSkills();
        this.hardSkills = hardSkills;
      } catch (error) {
        console.error('error fetching hard skills:', error);
      }
    },
    async addHardSkill(hardSkillData) {
      try {
        const newHardSkill = await createHardSkill(hardSkillData);
        this.hardSkills.push(newHardSkill);
      } catch (error) {
        console.error('error adding hard skill:', error);
      }
    },
    async deleteHardSkill(hardSkillId) {
      try {
        await deleteHardSkill(hardSkillId);
        this.hardSkills = this.hardSkills.filter((s) => s.hardSkillId !== hardSkillId);
      } catch (error) {
        console.error('error deleting hard skill:', error);
      }
    },
    async updateHardSkill(hardSkillId, hardSkillData) {
      try {
        const updatedHardSkill = await updateHardSkill(hardSkillId, hardSkillData);
        const index = this.hardSkills.findIndex((s) => s.hardSkillId === hardSkillId);
        if (index !== -1) {
          this.hardSkills.splice(index, 1, updatedHardSkill);
        }
      } catch (error) {
        console.error('error updating hard skill:', error);
      }
    }
  }
});
