import '../assets/css/atualizarProdutos.css'
import { Link } from "react-router-dom";

export function AtualizarProdutos() {
    return (
        <>
            <section className='update'>
                <div className="updateProductd">
                    <figure className='updateLogo'>
                        <Link to="/"><img src="/img/logo_electricCompany.svg" alt="" /></Link>
                    </figure>
                </div>

                <div className="lineUpdate"></div>
            </section>
        </>
    )
}