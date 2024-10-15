import '../assets/css/Home.css'

export function Home() {
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
                    <h1>Oferta<div className="line-home"></div></h1>

                    <div className="cards-products">
                        <div className="card-product1">
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-products">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button">
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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
                                    <button>Comprar</button>
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

                <div className="questions">
                    <p>Pregunta</p>
                    <img src="/img/setinha.svg" alt="" />
                </div>

                <div className="questions" id='questions2'>
                    <p>Pregunta</p>
                    <img src="/img/setinha.svg" alt="" />
                </div>

                <div className="questions" id='questions3'>
                    <p>Pregunta</p>
                    <img src="/img/setinha.svg" alt="" />
                </div>

                <div className="questions" id='questions4'>
                    <p>Pregunta</p>
                    <img src="/img/setinha.svg" alt="" />
                </div>
            </section>

            {/* <section className='fifth-section'>
                <div className="ourBrands">
                    <h1>Nuestras marcas<div className="line-home"></div></h1>

                    <div className="carrossel">
                        <img src="/img/centelsa.svg" alt="" />
                        <img src="/img/legrand.svg" alt="" />
                        <img src="/img/miguelez.svg" alt="" />
                        <img src="/img/schneider.svg" alt="" />
                        <img src="/img/opalux.svg" alt="" />
                        <img src="/img/abb.svg" alt="" />
                        <img src="/img/philips.svg" alt="" />
                    </div>
                </div>
            </section> */}
        </>
    );
}