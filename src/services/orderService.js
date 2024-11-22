import axiosInstance from '../api/axiosInstance';

const orderService = {
    createOrder: (data) => axiosInstance.post('/order', data),
    getUserOrders: () => axiosInstance.get('/order/user-orders'),
    getOrderById: (id) => axiosInstance.get(`/order/${id}`),
    updateOrderStatus: (id, status) => axiosInstance.put(`/order/${id}/status`, { status }),
    cancelOrder: (id) => axiosInstance.put(`/order/${id}/cancel`),
    getAllOrders: () => axiosInstance.get('/order/all'),
};

export default orderService;