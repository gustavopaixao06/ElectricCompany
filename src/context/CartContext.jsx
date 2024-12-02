import React, { createContext, useContext, useState } from 'react';
import { useUser } from './UserContext'; // Verifica se o usuário está autenticado
import { toast } from 'sonner';

// Cria o contexto do carrinho
const CartContext = createContext();

// Hook para acessar o contexto mais facilmente
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { isAuthenticated } = useUser(); // Verifica se o usuário está autenticado

    // Adiciona um item ao carrinho
    const addToCart = (product, quantity) => {
        if (!isAuthenticated) {
            toast.info('Você precisa estar logado para adicionar produtos ao carrinho');
            return;
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.product._id === product._id);

            if (existingItem) {
                // Atualiza a quantidade se o produto já estiver no carrinho
                return prevCart.map(item =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Adiciona novo item
            return [...prevCart, { product, quantity }];
        });
    };

    // Atualiza a quantidade de um item
    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.product._id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Remove um item do carrinho
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.product._id !== productId));
    };

    // Limpa o carrinho
    const clearCart = () => {
        setCart([]);
    };

    // Total do carrinho
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            getCartTotal,
        }}>
            {children}
        </CartContext.Provider>
    );
};