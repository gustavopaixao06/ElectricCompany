import '../assets/css/adicionarProdutos.css'
import { Link } from "react-router-dom";

export function AdicionarProdutos() {
    return (
        <>
            <section className='update'>
                <div className="updateProductd">
                    <figure className='updateLogo'>
                        <Link to="/"><img src="/img/logo_electricCompany.svg" alt="" /></Link>
                    </figure>
                    <div className="addUpdate">
                        <img src="/img/mais.svg" alt="" /><p>Agregar Productos</p>
                    </div>
                </div>

                <div className="lineUpdate"></div>

                <div className="adicionar">

                    <div className="headerUpdate">
                        <p>Agregar Productos</p>

                        <div className="barResearch-update">
                            <label htmlFor="searchInput-update">
                                <span className="lupa-update"><img src="/img/lupaUpdate.svg" alt="" /></span>
                            </label>
                            <input type="text" id="searchInput-update" placeholder="Buscar productos" />
                        </div>

                        <div className="button-update">
                            <button>Agregar</button>
                        </div>

                    </div>

                    <div className="account-update">
                        <input type="text" name='nome' id='nome' placeholder='Nombre del Producto' required />
                        <input type="text" name='email' id='email' placeholder='Precio' required />
                        <input type="text" name='telefone' id='telefone' placeholder='Descripción' required />
                    </div>
                    <div className='input-img'>
                        <img src="" alt="" />
                        <input type="" name='imagem' id='imagem' placeholder='Agrega la imagen' required />
                    </div>

                    <div className="aggregates">
                        <p>Productos que ya están agregados</p>
                        <h5>Ver Más</h5>
                    </div>

                    <div className="cards-updates">

                        <Link to="/atualizarProdutos"><div className='card-update'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <p>Producto X</p>
                        </div>
                        </Link>

                        <div className='card-update'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <p>Producto X</p>
                        </div>

                        <div className='card-update'>
                            <img src="/img/disjuntor.svg" alt="" />
                            <p>Producto X</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}