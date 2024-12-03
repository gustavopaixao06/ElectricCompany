import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { toast } from 'sonner';
import orderService from '../services/orderService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { isAuthenticated } = useUser();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        if (!isAuthenticated) {
            toast.info('Você precisa estar logado para adicionar produtos ao carrinho');
            return;
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.product._id === product._id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { product, quantity }];
        });
    };

    const createOrder = async () => {
        if (!isAuthenticated) {
            toast.info('Você precisa estar logado para criar um pedido');
            return;
        }

        if (cart.length === 0) {
            toast.info('Seu carrinho está vazio!');
            return;
        }

        const orderData = {
            items: cart.map(item => ({
                productId: item.product._id,
                quantity: item.quantity,
            }))
        };

        try {
            const response = await orderService.createOrder(orderData);
            console.log(response);
            toast.success('Pedido criado com sucesso!');
            clearCart();
        } catch (error) {
            console.log(error);
            toast.error('Erro ao criar o pedido. Tente novamente.');
        }
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity === 0) {
            removeFromCart(productId);
        } else {
            setCart((prevCart) =>
                prevCart.map(item =>
                    item.product._id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.product._id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

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
            createOrder,
        }}>
            {children}
        </CartContext.Provider>
    );
};