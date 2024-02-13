// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://65a9dd41081bd82e1d95a804.mockapi.io/api/v1'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getMenuItems = () => api.get('/menu');
export const getMenuItemDetails = (itemId) => api.get(`/menu/${itemId}`);
export const getCategoryItems = () => api.get('/category');
export const getCategoryItemDetails = (itemId) => api.get(`/category/${itemId}`);
// export const getAboutInfo = () => api.get('/about');
// export const getContactInfo = () => api.get('/contact');
