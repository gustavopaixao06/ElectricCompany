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
                    <div className="addUpdate">
                        <img src="/img/mais.svg" alt="" /><p>Actualizar Productos</p>
                    </div>
                </div>

                <div className="lineUpdate"></div>

                <div className="adicionar">

                    <div className="headerUpdate">
                        <p>Actualizar Productos</p>

                        <div className="barResearch-update">
                            <label htmlFor="searchInput-update">
                                <span className="lupa-update"><img src="/img/lupaUpdate.svg" alt="" /></span>
                            </label>
                            <input type="text" id="searchInput-update" placeholder="Buscar productos" />
                        </div>

                        <div className="button-update">
                            <button>Actualizar</button>
                        </div>

                    </div>

                    <div className="description-update">
                        <img src="/img/disjuntor.svg" alt="" />
                        <div className="descriptionUp">
                            <h1>Producto X</h1>
                            <p id='value'>S/ 221.60</p>
                            <p>Aquí se encontrará la descripción del producto, donde se detallarán sus características y beneficios.
                                Esta información es esencial para ayudar a los clientes a tomar decisiones informadas.</p>
                        </div>
                    </div>

                    <div className="account-update">
                        <input type="text" name='nome' id='nome' placeholder='Nombre del Producto' required />
                        <input type="text" name='email' id='email' placeholder='Precio' required />
                        <input type="text" name='telefone' id='telefone' placeholder='Descripción' required />
                    </div>

                </div>
            </section>
        </>
    )
}