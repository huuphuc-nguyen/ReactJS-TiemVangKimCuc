// src/api/axiosConfig.js
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data;
    let result = data;

    if (data.result === true)
    {
        result = data.dataResult;
    }
    else {
        result = data.errorMessage;
    }
    return result;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
