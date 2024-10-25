import axiosInstance from '@/services/axiosInstance.js';

export const getAllTechnologies = async () => {
  try {
    const reponse = await axiosInstance.get('/technology');
    return reponse.data;
  } catch (error) {
    console.error('error fetching all technologies: ', error);
    throw error;
  }
};

export const getTechnologyById = async (technologyId) => {
  try {
    const response = await axiosInstance.get(`/technology/${technologyId}`);
    return response.data;
  } catch (error) {
    console.error(`error fetching technology with ID ${technologyId}:`, error);
    throw error;
  }
};

export const createTechnology = async (technologyRequestDTO) => {
  try {
    const response = await axiosInstance.post('/technology', technologyRequestDTO);
    return response.data;
  } catch (error) {
    console.error('error creating new technology:', error);
    throw error;
  }
};

export const updateTechnology = async (technologyId, technologyRequestDTO) => {
  try {
    const response = await axiosInstance.put(`/technology/${technologyId}`, technologyRequestDTO);
    return response.data;
  } catch (error) {
    console.error(`error updating technology with ID ${technologyId}:`, error);
    throw error;
  }
};

export const deleteTechnology = async (technologyId) => {
  try {
    await axiosInstance.delete(`/technology/${technologyId}`);
  } catch (error) {
    console.error(`error deleting project with ID ${technologyId}:`, error);
    throw error;
  }
};
