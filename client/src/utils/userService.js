// userService.js
import * as api from './api';

export const getUsers = () => api.getUsers();
export const createUser = (data) => api.createUser(data);
export const updateUser = (id, data) => api.updateUser(id, data);
export const deleteUser = (id) => api.deleteUser(id);
