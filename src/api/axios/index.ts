import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { appConfig } from '@/config';

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

InstanceAxios.interceptors.request.use((config) => {
  if (config.headers) {
    //
  }

  return config;
});
