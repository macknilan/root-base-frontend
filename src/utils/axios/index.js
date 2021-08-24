/* eslint-disable import/prefer-default-export */
/*
    BASE ULR PARA HACER LLAMADAS A LA API (AXIOS).
*/

import axios from 'axios';
import { API_URL } from '../const/index';

const instance = axios.create({
  baseURL: `${API_URL}`,
  /* headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }, */
  timeout: 30000,
  /*   auth: {
      username: `${TOKEN}`,
    },
    withCredentials: true, */
  /* responseType: 'json', */
});

export default instance;
