import '../assets/css/producto.css'
import { Link } from "react-router-dom";

export function Producto() {
    return (
        <>
            <section className='first'>
                <div className="merchandise">
                    <Link to='/'>
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

                        <h4> S/ 221.60</h4>
                    </div>

                    <div className="img-description">
                        <img src="/img/disjuntor2.svg" alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}