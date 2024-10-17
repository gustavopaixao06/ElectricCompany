import '../assets/css/productos.css'
import { Link } from "react-router-dom";

export function Productos() {
    return (
        <>
            <section className='first-productos'>
                <div className="category">
                    <h1>Category name</h1>

                    <h3>Filtrar por</h3>

                    <div className="filter">
                        <div className="type">
                            <p>Tipo</p>
                            <img src="/img/setinhaRoxa.svg" alt="" />
                        </div>

                        <div className="mark">
                            <p>Marca</p>
                            <img src="/img/setinhaRoxa.svg" alt="" />
                        </div>

                        <div className="color">
                            <p>Cor</p>
                            <img src="/img/setinhaRoxa.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="order-category">
                    <div className="order">
                        <p>Orden por</p>
                        <img src="/img/setinhaRoxa.svg" alt="" />
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