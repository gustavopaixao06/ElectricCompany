import axios from 'axios';
import { server } from './server';
import { toast } from 'sonner'

const axiosInstance = axios.create({
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        const publicRoutes = [
            '/user/register',
            '/user/verify-email',
            '/user/login',
            '/product/list',
            '/product/:id'
        ];

        if (!publicRoutes.includes(config.url) && token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response, 
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/login';
            toast.error("Por favor inicia sesión para acceder a esta función")
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;