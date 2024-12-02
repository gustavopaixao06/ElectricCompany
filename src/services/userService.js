import axiosInstance from '../api/axiosInstance';

const userService = {
    register: (data) => axiosInstance.post('/user/register', data),
    verifyEmail: (token) => axiosInstance.get(`/user/verify-email?token=${token}`),
    login: (data) => axiosInstance.post('/user/login', data),
    updateUser: (data) => axiosInstance.put('/user/update', data),
    deleteAccount: () => axiosInstance.delete('/user/delete'),
};

export default userService;