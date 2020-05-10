/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://reqres.in/api',
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'Content-Type': 'multipart/form-data',
  // },
});
