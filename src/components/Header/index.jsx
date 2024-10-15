import { Link, useLocation } from "react-router-dom";
import './header.css';
import React, { useEffect } from 'react';


export function Header() {

    return (
        <>
            <header>
                <div className="center">
                    <figure className="logo">
                        <img src="/img/logo_electricCompany.svg" alt="" />
                    </figure>

                    <nav className="menu-desktop">

                        <div className="barResearch">
                            <label htmlFor="searchInput">
                                <span className="lupa"><img src="/img/lupa.png" alt="" /></span>
                            </label>
                            <input type="text" id="searchInput" placeholder="Buscar productos" />
                        </div>

                        <div className="icons">
                            <img src="/img/iconUsuario.svg" alt="" />
                            <img src="/img/iconCoracao.svg" alt="" />
                            <img src="/img/iconCarrinho.svg" alt="" />
                        </div>

                    </nav>

                </div>

                <div className="description">
                    <h3>Encontrar los mejores productos</h3>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/" className="nav-item" id="Productos">Productos</Link>
                        </li>
                        <li>
                            <Link to="" className="nav-item" id="Marcas">Marcas</Link>
                        </li>
                        <li>
                            <Link to="" className="nav-item" id="Ofertas Especiales">Ofertas Especiales</Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="nav-item" id="Nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="nav-item" id="Atención">Atención al cliente</Link>
                        </li>
                    </ul>
                </div>

            </header>
        </>
    );
}
