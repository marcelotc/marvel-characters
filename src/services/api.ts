import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com', //process.env.REACT_APP_API,
});

export default api;
