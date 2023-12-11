// buildingService.js
import * as api from './api';

export const getBuildings = () => api.getBuildings();
export const createBuilding = (data) => api.createBuilding(data);
export const updateBuilding = (id, data) => api.updateBuilding(id, data);
export const deleteBuilding = (id) => api.deleteBuilding(id);
