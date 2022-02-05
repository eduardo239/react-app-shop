import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api'
});

export const addNewUser = (payload) => api.post(`/user/new`, payload);
export const allUsers = () => api.get(`/user/all`);
export const deleteUser = (id) => api.delete(`/user/delete/${id}`);
// export const updateItem = (id, payload) => api.put(`/update/${id}`, payload);
export const getUserById = (id) => api.get(`/user/${id}`);

const apis = {
  addNewUser,
  allUsers,
  deleteUser
};

export default apis;
