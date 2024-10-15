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

                    <ul>
                        <li>
                            <Link to="/" className="productos" id="">Productos</Link>
                        </li>
                        <li>
                            <Link to="/sobre" className="Marcas" id="">Marcas</Link>
                        </li>
                        <li>
                            <Link to="/contato" className="ofertas" id="">Ofertas Especiales</Link>
                        </li>
                        <li>
                            <Link to="/galeria" className="nosotros" id="">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/servicos" className="atención" id="">Atención al cliente</Link>
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
                    <p>© Todos os direitos reservados</p>
                </div>

                </div>

            </footer>
        </>
    )
}