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
            question: "Como funciona o JobLink?",
            answer: "Nosso sistema é feito para aproximar as empresas dos usuários, o sistema permite que as organizações enviem e anunciem suas vagas permitindo que as pessoas que buscam novas oportunidades mandem seus currículos para serem possivelmente contratados."
        },
        {
            question: "Como Faço para criar minha vaga como empresa?",
            answer: "Na home da página empresarial haverá um botão intitulado 'anuncie sua vaga', ao selecionar esse botão, você deverá preencher alguns campos para a criação da vaga, logo após isso ela aparecerá para os usuários se candidatarem."
        },
        {
            question: "Como Faço para criar minha vaga como empresa?",
            answer: "Na home da página empresarial haverá um botão intitulado 'anuncie sua vaga', ao selecionar esse botão, você deverá preencher alguns campos para a criação da vaga, logo após isso ela aparecerá para os usuários se candidatarem."
        },
        {
            question: "É necessário pagar para utilizar o nosso sistema?",
            answer: "Não, nosso sistema é totalmente gratuito, tanto para as organizações, quanto para os usuários."
        },
        {
            question: "Como funciona o sistema de busca de vagas?",
            answer: "Na aba de vagas, haverá um campo de busca, nele basta digitar a vaga em específica que você procura."
        }
    ];

    return (
        <>
            <section className='first-section'>
                <div className="carrossel">
                    <img src="/img/imgFundo.svg" id='img-caroussel' alt="" />
                    <img src="/img/logoBranco.png" id='logoWhite' alt="" />
                    <p>Todos los productos que necessitas para servicios eléctricos con la mejorgarantía</p>
                </div>
            </section>

            <section className="second-section">
                <div className="offer">
                    <h1 id="p-productos">Productos más vendidos<div className="line-home" id='line'></div></h1>

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
                
                <div className="offer-mobile">
                    
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