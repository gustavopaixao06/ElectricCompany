import '../assets/css/producto.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Producto() {
    const [counter, setCounter] = useState(1);

    function increase() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function decrease() {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
    }


    return (
        <>
            <section className='first'>
                <div className="merchandise">
                    <Link to='/' className='no-decoration'>
                        <div className="home-producto">
                            <img src="/img/casa.svg" alt="" id='home' />
                            <p><img src="/img/arrow.svg" alt="" id='arrow' /> Volver</p>
                        </div>
                    </Link>
                </div>

                <div className="disjuntorProducto">

                    <div className="productDescription">
                        <h3>Disjuntor Tripolar 100A <br /> Curva C - STECK</h3>

                        <p>. Los mini disyuntores STECK® están construidos cumpliendo con los estándares
                            técnicos más estrictos y pueden aplicarse a todo tipo de instalaciones eléctricas
                            de corriente alterna de baja tensión residenciales, comerciales e industriales.</p>

                        <h4>S/ 221.60</h4>

                        <div className="toAdd">

                            <div className="counter-container">
                                <button className="counter-button" onClick={decrease}>-</button>
                                <div className="counter-value">{counter}</div>
                                <button className="counter-button" onClick={increase}>+</button>
                            </div>

                            <Link to="/carro" className='no-decoration'><button className='carAdd'>ANÃDIR AL CARRITO</button></Link>

                            <div className='heart'>
                                <img src="/img/coracaoProduto.svg" alt="" />
                            </div>

                        </div>

                    </div>

                    <div className="img-description">
                        <img src="/img/disjuntor2.svg" alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}