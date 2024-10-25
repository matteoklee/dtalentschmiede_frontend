import axiosInstance from '@/services/axiosInstance.js';

export const getAllHardSkills = async () => {
  try {
    const response = await axiosInstance.get('/hard-skill');
    return response.data;
  } catch (error) {
    console.error('error fetching all hard skills:', error);
    throw error;
  }
};

export const getHardSkillById = async (hardSkillId) => {
  try {
    const response = await axiosInstance.get(`/hard-skill/${hardSkillId}`);
    return response.data;
  } catch (error) {
    console.error(`error fetching hard skill with ID ${hardSkillId}:`, error);
    throw error;
  }
};

export const createHardSkill = async (hardSkillData) => {
  try {
    const response = await axiosInstance.post('/hard-skill', hardSkillData);
    return response.data;
  } catch (error) {
    console.error('error creating new hard skill:', error);
    throw error;
  }
};

export const updateHardSkill = async (hardSkillId, hardSkillData) => {
  try {
    const response = await axiosInstance.put(`/hard-skill/${hardSkillId}`, hardSkillData);
    return response.data;
  } catch (error) {
    console.error(`error updating hard skill with ID ${hardSkillId}:`, error);
    throw error;
  }
};

export const deleteHardSkill = async (hardSkillId) => {
  try {
    await axiosInstance.delete(`/hard-skill/${hardSkillId}`);
  } catch (error) {
    console.error(`error deleting hard skill with ID ${hardSkillId}:`, error);
    throw error;
  }
};
