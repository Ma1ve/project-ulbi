import axios, { AxiosRequestConfig } from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru';s

export const $api = axios.create({
  baseURL: __API__,
  // header добавляем в момент создания instance
  // когда авторизовались instane был создан но в authorization на момент когда мы авторизовались была пустая строка
  // headers: {
  //   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  // },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }

  return config;
});
