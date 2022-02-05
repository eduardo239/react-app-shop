import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api'
});

export const addItemOrder = (payload) => api.post(`/order/add`, payload);
export const getAllOrderItems = (id) => api.get(`/order/all/${id}`);
export const deleteItemOrder = (id) => api.delete(`/order/item/${id}`);

const shopApis = {
  addItemOrder,
  getAllOrderItems,
  deleteItemOrder
};

export default shopApis;
