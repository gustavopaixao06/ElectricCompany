import { Link, useLocation } from "react-router-dom";
import './header.css';
import React, { useEffect } from 'react';


export function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Remove a classe 'check' de todos os links
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('check'));

        // Adiciona a classe 'check' ao link correspondente à URL atual
        switch (currentPath) {
            case '/productos':
                document.getElementById('Productos')?.classList.add('check');
                break;
            case '/':
                document.getElementById('Marcas')?.classList.add('check');
                break;
            case '/ofertas':
                document.getElementById('OfertasEspeciales')?.classList.add('check');
                break;
            case '/nosotros':
                document.getElementById('Nosotros')?.classList.add('check');
                break;
            case '/contacto':
                document.getElementById('Atención')?.classList.add('check');
                break;
            default:
                break;
        }

    }, [currentPath]);

    const showMenuMobile = () => {
        const menuMobile = document.querySelector('.mobile-click');

        let menuStatus = 0

        if (menuStatus === 0) {
            menuMobile.classList.toggle("menu-show");
            menuStatus++;
        } else {
            menuMobile.classList.remove("menu-show");
            menuStatus--;
        }
    };

    return (
        <>
            <header>
                <div className="center">
                    <figure className="logo">
                        <Link to="/"><img src="/img/logo_electricCompany.svg" alt="" /></Link>
                    </figure>

                    <nav className="menu-desktop">

                        <div className="barResearch">
                            <label htmlFor="searchInput">
                                <span className="lupa"><img src="/img/lupa.png" alt="" /></span>
                            </label>
                            <input type="text" id="searchInput" placeholder="Buscar productos" />
                        </div>

                        <div className="icons">
                            <Link to="/loginCliente"><img src="/img/iconUsuario.svg" alt="" /></Link>
                            <Link to="/favoritos"><img src="/img/iconCoracao.svg" alt="" /></Link>
                            <Link to="/carro"><img src="/img/iconCarrinho.svg" alt="" /></Link>
                        </div>

                    </nav>

                </div>

                <div className="description">
                    <h3>Encontrar los mejores productos</h3>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/productos" className="nav-item" id="Productos">Productos</Link>
                        </li>
                        <li>
                            <Link to="" className="nav-item" id="Marcas">Marcas</Link>
                        </li>
                        <li>
                            <Link to="/ofertas" className="nav-item" id="OfertasEspeciales">Ofertas Especiales</Link>
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
