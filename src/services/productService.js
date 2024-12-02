import axiosInstance from '../api/axiosInstance';

const productService = {
    createProduct: (data) => axiosInstance.post('/product/create-product', data, {
        headers: {
            'Content-Type': 'multipart/form-data', // Necessário para upload de arquivos
        },
    }),
    getProducts: (params) => axiosInstance.get('/product/list', { params }),
    getProductById: (id) => axiosInstance.get(`/product/${id}`),
    updateProduct: (id, data) => axiosInstance.put(`/product/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data', // Necessário para upload de arquivos
        },
    }),
    deleteProduct: (id) => axiosInstance.delete(`/product/${id}`),
    getStockReport: () => axiosInstance.get('/product/stock-report'),
};

export default productService;