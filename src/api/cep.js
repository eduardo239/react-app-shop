import axios from 'axios';

export const cepSearch = (cep) =>
  axios.get(`https://viacep.com.br/ws/${cep}/json/`);

const addressApis = {
  cepSearch
};

export default addressApis;
