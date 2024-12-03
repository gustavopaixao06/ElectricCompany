import '../assets/css/producto.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useCart } from '../context/CartContext';
import productService from '../services/productService';
import { toast } from 'sonner';
import { useUser } from '../context/UserContext'; // Importando o contexto do usuário

export function Producto() {
    const [product, setProduct] = useState(null); // Armazena os detalhes do produto
    const [counter, setCounter] = useState(1); // Quantidade
    const [loading, setLoading] = useState(true); // Carregamento do produto
    const { addToCart } = useCart(); // Função para adicionar ao carrinho
    const { id } = useParams(); // Obtém o ID do produto da URL
    const { isAuthenticated } = useUser(); // Verifica se o usuário está autenticado

    // Função para buscar os detalhes do produto
    const fetchProduct = async () => {
        try {
            const response = await productService.getProductById(id);
            setProduct(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            toast.error('Erro ao carregar o produto. Tente novamente mais tarde.');
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    function increase() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function decrease() {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
    }

    function handleAddToCart() {
        if (!isAuthenticated) {
            toast.info('Você precisa estar logado para adicionar produtos ao carrinho');
            return;
        }

        if (product) {
            addToCart(product, counter); // Adiciona ao carrinho
            toast.success('Produto adicionado ao carrinho!');
        }
    }

    if (loading) {
        return <p>Carregando produto...</p>;
    }

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <>
            <section className='first'>
                <div className="merchandise">
                    <Link to='/' className='no-decoration'>
                        <div className="home-producto">
                            <img src="/img/casa.svg" alt="Home" id='home' />
                            <p><img src="/img/arrow.svg" alt="Voltar" id='arrow' /> Volver</p>
                        </div>
                    </Link>
                </div>

                <div className="disjuntorProducto">
                    <div className="productDescription">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <h4>S/ {product.price.toFixed(2)}</h4>

                        <div className="toAdd">
                            <div className="counter-container">
                                <button className="counter-button" onClick={decrease}>-</button>
                                <div className="counter-value">{counter}</div>
                                <button className="counter-button" onClick={increase}>+</button>
                            </div>
                            
                            <button className='carAdd' onClick={handleAddToCart}>
                                AÑADIR AL CARRITO
                            </button>

                            <div className='heart'>
                                <img src="/img/coracaoProduto.svg" alt="Favoritar" />
                            </div>
                        </div>
                    </div>

                    <div className="img-description">
                        <img src={product.imageUrl || "/img/disjuntor2.svg"} alt={product.name} />
                    </div>
                </div>
            </section>
        </>
    );
}