import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api'
});

export const insertItem = (payload) => api.post(`/new`, payload);
export const allItems = () => api.get(`/all`);
export const deleteItem = (id) => api.delete(`/item/${id}`);
export const updateItem = (id, payload) => api.put(`/update/${id}`, payload);
export const getItemById = (id) => api.get(`/item/${id}`);

const apis = {
  insertItem,
  allItems,
  deleteItem,
  updateItem,
  getItemById
};

export default apis;
