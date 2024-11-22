import axiosInstance from '../api/axiosInstance';

const uploadService = {
    uploadFile: (file) => {
        const formData = new FormData();
        formData.append('file', file);

        return axiosInstance.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
};

export default uploadService;