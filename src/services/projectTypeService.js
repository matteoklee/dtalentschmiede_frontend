import axiosInstance from '@/services/axiosInstance.js';

export const getAllProjectTypes = async () => {
  try {
    const response = await axiosInstance.get('/project-type');
    return response.data;
  } catch (error) {
    console.error('error fetching all project types:', error);
    throw error;
  }
};

export const getProjectTypeById = async (projectTypeId) => {
  try {
    const response = await axiosInstance.get(`/project-type/${projectTypeId}`);
    return response.data;
  } catch (error) {
    console.error(`error fetching project type with ID ${projectTypeId}:`, error);
    throw error;
  }
};

export const createProjectType = async (projectTypeRequestDTO) => {
  try {
    const response = await axiosInstance.post('/project-type', projectTypeRequestDTO);
    return response.data;
  } catch (error) {
    console.error('error creating new project type:', error);
    throw error;
  }
};

export const updateProjectType = async (projectTypeId, projectTypeRequestDTO) => {
  try {
    const response = await axiosInstance.put(
      `/project-type/${projectTypeId}`,
      projectTypeRequestDTO
    );
    return response.data;
  } catch (error) {
    console.error(`error updating project type with ID ${projectTypeId}:`, error);
    throw error;
  }
};

export const deleteProjectType = async (projectTypeId) => {
  try {
    await axiosInstance.delete(`/project-type/${projectTypeId}`);
  } catch (error) {
    console.error(`error deleting project type with ID ${projectTypeId}:`, error);
    throw error;
  }
};
