import '../assets/css/productos.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../components/Filters/FilterCheckbox';
import productService from '../services/productService'; // Serviço para interagir com a API

export function Productos() {
    const [products, setProducts] = useState([]); // Todos os produtos carregados da API
    const [filteredProducts, setFilteredProducts] = useState([]); // Produtos filtrados
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPriceOrder, setSelectedPriceOrder] = useState([]);

    // Função para buscar produtos da API
    const fetchProducts = async () => {
        try {
            const response = await productService.getProducts(); // Chamada ao serviço

            if (response.data && Array.isArray(response.data.products)) {
                setProducts(response.data.products); // Define os produtos no estado
                setFilteredProducts(response.data.products); // Inicializa os produtos filtrados com todos os produtos
            } else {
                console.error('A estrutura da resposta da API não é válida:', response.data);
                setProducts([]); // Define um array vazio para evitar erros
                setFilteredProducts([]);
            }
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            setProducts([]);
            setFilteredProducts([]);
        }
    };

    // Aplica os filtros aos produtos
    const handleFilter = () => {
        let filtered = products;

        // Filtro por tipo
        if (selectedTypes.length > 0) {
            filtered = filtered.filter(product =>
                selectedTypes.some(type => product.category === type)
            );
        }

        // Filtro por marca
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(product =>
                selectedBrands.some(brand => product.brand === brand)
            );
        }

        // Filtro por cor
        if (selectedColors.length > 0) {
            filtered = filtered.filter(product =>
                selectedColors.some(color => product.color === color)
            );
        }

        // Ordenação por preço
        if (selectedPriceOrder.includes('Más económico')) {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (selectedPriceOrder.includes('Más caro')) {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered); // Atualiza os produtos filtrados
    };

    // Buscar produtos ao carregar a página
    useEffect(() => {
        fetchProducts();
    }, []);

    // Atualiza os produtos filtrados sempre que os filtros mudarem
    useEffect(() => {
        handleFilter();
    }, [selectedTypes, selectedBrands, selectedColors, selectedPriceOrder]);

    return (
        <>
            <section className='first-productos'>
                <div className="category">
                    <h1>Produtos</h1>

                    <h3>Filtrar por</h3>

                    <div className="filter">
                        <FilterCheckbox
                            label="Tipo"
                            options={["Interruptores", "Placas", "Enchufes"]} // Substitua pelos valores reais do backend
                            selectedOptions={selectedTypes}
                            setSelectedOptions={setSelectedTypes}
                        />
                        <FilterCheckbox
                            label="Marca"
                            options={["Philips", "ABB", "Schneider"]} // Substitua pelos valores reais do backend
                            selectedOptions={selectedBrands}
                            setSelectedOptions={setSelectedBrands}
                        />
                        <FilterCheckbox
                            label="Cor"
                            options={["Preto", "Branco", "Cinza"]} // Substitua pelos valores reais do backend
                            selectedOptions={selectedColors}
                            setSelectedOptions={setSelectedColors}
                        />
                    </div>

                    <button id='filter-button' onClick={handleFilter}>Aplicar Filtros</button>
                </div>

                <div className="order-category">
                        <FilterCheckbox
                            label="Orden por precio"
                            options={["Menor precio", "Mayor precio"]}
                            selectedOptions={selectedColors}
                            setSelectedOptions={setSelectedColors}
                            className="filter-price"
                        />

                    <div className="category-products">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div className="category-product1" key={product._id}>
                                    <img src={product.imageUrl || "/img/disjuntor.svg"} alt={product.name} />
                                    <div className="description-category">
                                        <h3>{product.name}</h3>
                                        <p>S/ {product.price.toFixed(2)}</p>
                                        <div className="button-category">
                                            <Link to={`/producto/${product._id}`}><button>Comprar</button></Link>
                                            <img src="/img/carrinho.svg" alt="Adicionar ao carrinho" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum produto encontrado</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}