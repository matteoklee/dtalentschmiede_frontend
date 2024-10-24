import axiosInstance from '@/services/axiosInstance.js';

export const getAllProjects = async () => {
  try {
    const reponse = await axiosInstance.get('/project');
    return reponse.data;
  } catch (error) {
    console.error('error fetching all projects: ', error);
    throw error;
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await axiosInstance.get(`/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`error fetching project with ID ${projectId}:`, error);
    throw error;
  }
};

export const createProject = async (projectRequestDTO) => {
  try {
    const response = await axiosInstance.post('/project', projectRequestDTO);
    return response.data;
  } catch (error) {
    console.error('error creating new project:', error);
    throw error;
  }
};

export const updateProject = async (projectId, projectRequestDTO) => {
  try {
    const response = await axiosInstance.put(`/project/${projectId}`, projectRequestDTO);
    return response.data;
  } catch (error) {
    console.error(`error updating project with ID ${projectId}:`, error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    await axiosInstance.delete(`/project/${projectId}`);
  } catch (error) {
    console.error(`error deleting project with ID ${projectId}:`, error);
    throw error;
  }
};
