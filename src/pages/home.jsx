import { useEffect, useRef } from 'react';
import '../assets/css/Home.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import productService from '../services/productService';


export function Home() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "¿Qué tipos de productos ofrece ELÉCTRICA COMPONY S&S SAC?",
            answer: "Ofrecemos una amplia gama de productos de bajo voltaje, incluidos cables, disyuntores, paneles eléctricos y otros accesorios eléctricos de alta calidad."
        },
        {
            question: "¿Cuáles son las principales marcas con las que trabaja la empresa?",
            answer: "Trabajamos con marcas reconocidas en el mercado para garantizar calidad y seguridad en cada proyecto."
        },
        {
            question: "¿Cuál es el tiempo de entrega de los productos?",
            answer: "El tiempo de entrega depende de la ubicación y la disponibilidad del producto. Normalmente ofrecemos una estimación de entrega al confirmar su pedido."
        },
        {
            question: "¿Cuáles son las opciones de pago?",
            answer: "Aceptamos diversas formas de pago, incluyendo transferencias bancarias, tarjetas de crédito y otras opciones que garantizan seguridad y comodidad para nuestros clientes."
        },
        {
            question: "¿Cómo funciona el soporte técnico y la gestión de garantías?",
            answer: "Ofrecemos soporte técnico completo y gestión de garantía para todos los productos que nos compran, garantizando que nuestros clientes tengan el soporte que necesitan después de la compra."
        }
    ];

    const [selectedRadio, setSelectedRadio] = useState("radio1");
    const [cont, setCont] = useState(1);

    // Alternar automaticamente entre os rádios a cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCont((prev) => (prev >= 3 ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    // Atualiza o rádio selecionado sempre que `cont` mudar
    useEffect(() => {
        setSelectedRadio(`radio${cont}`);
    }, [cont]);

    const [ofertaProdutos, setOfertaProdutos] = useState([]);
    const [maisVendidosProdutos, setMaisVendidosProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const { data } = await productService.getProducts({});
                const produtos = data.products || [];
                console.log("Produtos recebidos:", produtos);

                if (Array.isArray(produtos)) {
                    const produtosEmOferta = produtos.filter(produto => produto.isOferta === true);
                    setOfertaProdutos(produtosEmOferta.slice(0, 4));
                    console.log("Produtos em oferta:", produtosEmOferta);

                    const produtosMaisVendidos = produtos.sort((a, b) => (b.reservedQuantity + b.soldQuantity) - (a.reservedQuantity + a.soldQuantity));
                    setMaisVendidosProdutos(produtosMaisVendidos.slice(0, 4));
                    console.log("Produtos mais vendidos:", produtosMaisVendidos);
                } else {
                    console.error('A resposta da API não contém um array de produtos:', data);
                }
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <>
            <section className='first-section'>
                <div className="slider-content">

                    <input
                        type="radio"
                        name="btn-radio"
                        id="radio1"
                        checked={selectedRadio === "radio1"}
                        onChange={() => setSelectedRadio("radio1")}
                    />
                    <input
                        type="radio"
                        name="btn-radio"
                        id="radio2"
                        checked={selectedRadio === "radio2"}
                        onChange={() => setSelectedRadio("radio2")}
                    />
                    <input
                        type="radio"
                        name="btn-radio"
                        id="radio3"
                        checked={selectedRadio === "radio3"}
                        onChange={() => setSelectedRadio("radio3")}
                    />

                    <div className="slide-box primeiro">
                        <img src="/img/imgFundo.svg" id='img-caroussel' alt="" />
                    </div>

                    <div className="slide-box">
                        <img src="/img/imgFundo2.svg" id='img-caroussel2' alt="" />
                    </div>

                    <div className="slide-box">
                        <img src="/img/imgFundo3.svg" id='img-caroussel' alt="" />
                    </div>

                    <div className="nav-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>

                    <div className="nav-manual">
                        <label htmlFor="radio1" className='manual-btn'></label>
                        <label htmlFor="radio2" className='manual-btn'></label>
                        <label htmlFor="radio3" className='manual-btn'></label>
                    </div>
                </div>
            </section>

            <section className="second-section">
                <div className="offer">
                    <h1 id="p-productos">Productos más vendidos<div className="line-home" id='line'></div></h1>

                    <div className="cards-products">
                        {maisVendidosProdutos.map((produto, index) => (
                            <div key={index} className="card-product1">
                                <img src={produto.imageUrl} alt={produto.name} />
                                <div className="description-products">
                                    <h3>{produto.name}</h3>
                                    <p>S/ {produto.price}</p>
                                    <div className="button">
                                        <Link to={`/producto/${produto._id}`}><button>Comprar</button></Link>
                                        <img src="/img/carrinho.svg" alt="Adicionar ao Carrinho" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="offer-mobile">

                </div>
            </section>

            <section className="second-section-mobile">
                <div className="offer">
                    <h1 id="p-productos">Productos más vendidos<div className="line-home" id='line'></div></h1>

                    <motion.div ref={carousel} className="cards-products-mobile" whileTap={{ cursor: "grabbing" }} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        {maisVendidosProdutos.map((produto, index) => (
                            <div key={index} className="card-products">
                                <img src={produto.imageUrl} alt={produto.name} />
                                <div className="description-products">
                                    <h3>{produto.name}</h3>
                                    <p>S/ {produto.price}</p>
                                    <div className="button">
                                        <Link to={`/producto/${produto._id}`}><button>Comprar</button></Link>
                                        <img src="/img/carrinho.svg" alt="Adicionar ao Carrinho" />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </motion.div>
                </div>

            </section>

            <section className="second-section-mobile">
                <div className="offer">
                    <h1 id="p-producto">Oferta<div className="line-home" id='line-oferta'></div></h1>

                    <motion.div ref={carousel} className="cards-products-mobile" whileTap={{ cursor: "grabbing" }} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        <div className="card-products">
                            {ofertaProdutos.map((produto, index) => (
                                <div key={index} className="card-product1">
                                    <img src={produto.imageUrl} alt={produto.name} />
                                    <div className="description-products">
                                        <h3>{produto.name}</h3>
                                        <p>S/ {produto.price}</p>
                                        <div className="button">
                                            <Link to={`/producto/${produto._id}`}><button>Comprar</button></Link>
                                            <img src="/img/carrinho.svg" alt="Adicionar ao Carrinho" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>


            </section>

            <section className="third-section">
                <div className="offer">
                    <h1>Oferta<div className="line-home"></div></h1>

                    <div className="cards-products">
                        {ofertaProdutos.map((produto, index) => (
                            <div key={index} className="card-product1">
                                <img src={produto.imageUrl} alt={produto.name} />
                                <div className="description-products">
                                    <h3>{produto.name}</h3>
                                    <p>S/ {produto.price}</p>
                                    <div className="button">
                                        <Link to={`/producto/${produto._id}`}><button>Comprar</button></Link>
                                        <img src="/img/carrinho.svg" alt="Adicionar ao Carrinho" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="fourth-section">
                <div className="preguntasFrecuentes">
                    <h1>Preguntas frecuentes<div className="line-home" id='lineF'></div></h1>
                </div>

                <div className="faqH">
                    {faqItems.map((item, index) => (
                        <div className="faq-itemH" key={index}>
                            <button className='faq-questionH' onClick={() => handleToggle(index)}>
                                <div>{item.question}</div>
                                <div className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>
                                    <img src="/img/setinha.svg" alt="seta" />
                                </div>
                            </button>
                            <div className={`faq-answerH ${activeIndex === index ? 'show' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='fifth-section'>
                <div className="ourBrands">
                    <h1>Nuestras marcas<div className="line-home" id='lineF'></div></h1>

                    <div className="carrossel-home">

                        <div className="fornecedores">

                            <div className="samsung">
                                <img src="/img/centelsa.svg" id='centelsa' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/legrand.svg" id='legrand' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/miguelez.svg" id='miguelez' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/schneiderElectric.svg" id='schneider' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/opalux.svg" id='opalux' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/abb.svg" id='abb' alt="" />
                            </div>

                            <div className="samsung">
                                <img src="/img/philips1.svg" id='philips' alt="" />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}