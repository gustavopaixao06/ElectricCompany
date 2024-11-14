import '../assets/css/Home.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export function Home() {

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

    return (
        <>
            <section className='first-section'>
                <div className="carrossel">
                    <img src="/img/imgFundo.svg" alt="" />
                    <img src="/img/logoBranco.png" id='logoWhite' alt="" />
                    <p>Todos los productos que necessitas para servicios eléctricos con la mejorgarantía</p>
                </div>
            </section>

            <section className="second-section">
                <div className="offer">
                    <h1>Productos más vendidos<div className="line-home"></div></h1>

                    <div className="cards-products">
                        <div className="card-product1">
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card2'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card3'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card4'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="third-section">
                <div className="offer">
                    <h1>Oferta<div className="line-home"></div></h1>

                    <div className="cards-products">
                        <div className="card-product1">
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card5'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card6'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-product1" id='card7'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fourth-section">
                <div className="preguntasFrecuentes">
                    <h1>Preguntas frecuentes<div className="line-home"></div></h1>
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
                    <h1>Nuestras marcas<div className="line-home"></div></h1>

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