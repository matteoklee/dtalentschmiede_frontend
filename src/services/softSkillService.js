
import axiosInstance from '@/services/axiosInstance.js';

export const getAllSoftSkills = async () => {
    try {
        const response = await axiosInstance.get('/soft-skill');
        return response.data;
    } catch (error) {
        console.error('error fetching all soft skills:', error);
        throw error;
    }
};

export const getSoftSkillById = async (softSkillId) => {
    try {
        const response = await axiosInstance.get(`/soft-skill/${softSkillId}`);
        return response.data;
    } catch (error) {
        console.error(`error fetching soft skill with ID ${softSkillId}:`, error);
        throw error;
    }
};

export const createSoftSkill = async (softSkillData) => {
    try {
        const response = await axiosInstance.post('/soft-skill', softSkillData);
        return response.data;
    } catch (error) {
        console.error('error creating new soft skill:', error);
        throw error;
    }
};

export const updateSoftSkill = async (softSkillId, softSkillData) => {
    try {
        const response = await axiosInstance.put(`/soft-skill/${softSkillId}`, softSkillData);
        return response.data;
    } catch (error) {
        console.error(`error updating soft skill with ID ${softSkillId}:`, error);
        throw error;
    }
};

export const deleteSoftSkill = async (softSkillId) => {
    try {
        await axiosInstance.delete(`/soft-skill/${softSkillId}`);
    } catch (error) {
        console.error(`error deleting soft skill with ID ${softSkillId}:`, error);
        throw error;
    }
};
