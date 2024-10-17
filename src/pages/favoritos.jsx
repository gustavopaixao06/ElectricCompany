import '../assets/css/favoritos.css'
import { Link } from "react-router-dom";

export function Favoritos() {
    return (
        <>
            <section className='first-favoritos'>
                <div className="favorites">
                    <h1>Productos favoritos</h1>

                    <div className="cards-favorites">
                        <div className="card-favorite1" id='favorite1'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-favorite1" id='favorite2'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-favorite1" id='favorite3'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards-favorites">
                        <div className="card-favorite1" id='favorite1'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-favorite1" id='favorite2'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
                                    <Link to='/producto'><button>Comprar</button></Link>
                                    <img src="/img/carrinho.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="card-favorite1" id='favorite3'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <div className="description-favorite">
                                <h3>Productos X</h3>
                                <p>S/ 221.60</p>
                                <div className="button-favorite">
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