import React, { createContext, useContext, useState, useEffect } from 'react';
import userService from '../services/userService'; // Serviço de usuários

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('accessToken') // Verifica se o token está no localStorage
    );

    // Carrega os dados do usuário ao iniciar se o token estiver presente no localStorage
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsAuthenticated(true);
            // Carregar os dados do usuário do backend ou de uma API, caso necessário
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await userService.login(credentials);
            if (response.status === 200) {
                const { token, user } = response.data;
                localStorage.setItem('accessToken', token); // Armazenar o token no localStorage
                setIsAuthenticated(true);
                setUser(user); // Salva os dados do usuário no estado
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
            setUser(null);
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};