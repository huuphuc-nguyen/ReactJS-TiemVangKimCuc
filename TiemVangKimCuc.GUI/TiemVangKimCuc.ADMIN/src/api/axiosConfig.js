import axios from 'axios';
import { logout } from '../features/auth/authSlice';

const baseUrl = import.meta.env.VITE_BASE_URL

let store;

export const injectStore = (newStore) => {
    store = newStore;
}

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

    return data;
  },
  (error) => {
    
    if (error.response.status === 401) {
      // Clear token and Authenticated State
      store.dispatch(logout());
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
