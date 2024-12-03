import React, { createContext, useContext, useState, useEffect } from 'react';
import userService from '../services/userService'; // Serviço de usuários

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('accessToken') // Verifica se o token está no localStorage
    );

    // Carrega os dados do usuário ao iniciar se o token estiver presente no localStorage
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await userService.login(credentials);
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem('accessToken', token);
                setIsAuthenticated(true);
            }
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw new Error(error.response?.data?.error || 'Erro desconhecido ao fazer login');
        }
    };

    const logout = async () => {
        try {
            localStorage.removeItem('accessToken');
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    const register = async (data) => {
        try {
            const response = await userService.register(data); // Chama o endpoint de registro
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Erro ao criar conta');
        }
    };


    return (
        <UserContext.Provider value={{ login, logout, isAuthenticated, register }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};