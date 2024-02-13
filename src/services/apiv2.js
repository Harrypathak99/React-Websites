// services/apiv2.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCateItems = () => api.get('/menus');
export const getCateItemDetails = (itemId) => api.get(`/dishes/${itemId}`);
export const getCategoryItems = () => api.get('/dishes');
export const getCategoryItemDetails = (itemId) => api.get(`/category/${itemId}`);
// export const getAboutInfo = () => api.get('/about');
// export const getContactInfo = () => api.get('/contact');
