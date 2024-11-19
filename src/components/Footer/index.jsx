import "../Footer/footer.css";
import { Link } from "react-router-dom";




export function Footer() {

    return (
        <>
            <footer className='rodape'>

                <div className="footer">
                    <div className="linha-footer"></div>
                </div>


                <nav className="menu-footer">

                    <figure className="logo-footer">
                        <img src="/img/logo-footer.svg" alt="" />
                    </figure>

                    <ul className="menu-mobile-footer">
                        <li>
                            <Link to="/productos" className="productos" id="">Productos</Link>
                        </li>
                        <li>
                            <Link to="" className="productos" id="">Marcas</Link>
                        </li>
                        <li>
                            <Link to="/ofertas" className="productos" id="">Ofertas Especiales</Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="productos" id="">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="productos" id="">Atención al cliente</Link>
                        </li>
                    </ul>
                </nav>

                <div className="footer">
                    <div className="linhaBottom-footer"></div>
                </div>

                <div className="baseboard">

                    <div className="icons-footer">
                        <img src="/img/linkedin.svg" alt="" />
                        <img src="/img/whatsap.svg" alt="" />
                    </div>

                    <div className="rights">
                        <p>© Reservados todos los derechos</p>
                    </div>

                </div>

            </footer>
        </>
    )
}