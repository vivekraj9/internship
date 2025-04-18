// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/auth',
});

export const registerUser = async (formData) => {
  return await API.post('/register', formData);
};

export const loginUser = async (formData) => {
  return await API.post('/login', formData);
};

export const forgotPassword = async (formData) => {
  return await API.post('/forgot-password', formData);
};

export default API;
