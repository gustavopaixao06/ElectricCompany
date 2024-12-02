import '../assets/css/productos.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import FilterCheckbox from '../components/Filters/FilterCheckbox';

export function Productos() {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const handleFilter = () => {
        console.log({
            selectedTypes,
            selectedBrands,
            selectedColors,
        });
    };

    return (
        <>
            <section className='first-productos'>
                <div className="category">
                    <h1>Category name</h1>

                    <h3>Filtrar por</h3>

                    <div className="filter">
                        <FilterCheckbox
                            label="Tipo"
                            options={["Interruptores", "Placas", "Enchufes"]}
                            selectedOptions={selectedTypes}
                            setSelectedOptions={setSelectedTypes}
                        />
                        <FilterCheckbox
                            label="Marca"
                            options={["Philips", "ABB", "Schneider"]}
                            selectedOptions={selectedBrands}
                            setSelectedOptions={setSelectedBrands}
                        />
                        <FilterCheckbox
                            label="Cor"
                            options={["Preto", "Branco", "Cinza"]}
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
                        <div className="category-product1" id='category1'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="category-product1" id='category2'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="category-product1" id='category3'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-products">
                        <div className="category-product1" id='category1'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="category-product1" id='category2'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="category-product1" id='category3'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-category">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-category">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}