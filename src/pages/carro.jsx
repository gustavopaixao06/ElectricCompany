import '../assets/css/carro.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Carro() {

    const [counter, setCounter] = useState(1);

    function increase() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function decrease() {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
    }
    return (
        <>
            <div className="merchandise">
                <Link to='/' className='no-decoration'>
                    <div className="home-producto">
                        <img src="/img/casa.svg" alt="" id='home' />
                        <p><img src="/img/arrow.svg" alt="" id='arrow' /> Volver</p>
                    </div>
                </Link>
            </div>

            <section className='first-carro'>
                <div className="cart">
                    <div className="imgCart">
                        <img src="/img/disjuntor2.svg" alt="" />
                    </div>

                    <div className="cartDescription">
                        <h3>Disjuntor Tripolar 100A Curva C - STECK</h3>

                        <h4>S/ 221.60</h4>
                    </div>

                    <div className="cartCounter">
                        <div className="counter-container">
                            <button className="counter-button" onClick={decrease}>-</button>
                            <div className="counter-value">{counter}</div>
                            <button className="counter-button" onClick={increase}>+</button>
                        </div>
                    </div>
                </div>

                <div className="button-cart">
                    <button>Comprar</button>
                </div>
                
            </section>
        </>
    )
}