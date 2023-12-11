// api.js
import axios from 'axios';

const BASE_URL = 'https://6575133bb2fbb8f6509ce20f.mockapi.io';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = () => api.get('/users');
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export const getBuildings = () => api.get('/buildings');
export const createBuilding = (data) => api.post('/buildings', data);
export const updateBuilding = (id, data) => api.put(`/buildings/${id}`, data);
export const deleteBuilding = (id) => api.delete(`/buildings/${id}`);
