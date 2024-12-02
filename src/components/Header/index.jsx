import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import DropDrownProfile from "../DropDrown/DropDrownProfile";
import DropDrownMarca from "../DropDrown/DropDrownMarca";


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
            case '/marcas':
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

    const [hoveredDropdown, setHoveredDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setHoveredDropdown(dropdown); // Exibe o dropdown correspondente
    };

    const handleMouseLeave = () => {
        setHoveredDropdown(null); // Esconde o dropdown
    };

    const getActiveClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <>
            <header>

                <div className="description">
                    <h3>Encontrar los mejores productos</h3>
                </div>

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

                <div className="menu">
                    <ul>
                        <li>
                            <div
                                className="dropdown-container"
                                onMouseEnter={() => handleMouseEnter("profile")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to="/productos"
                                    className={`nav-item ${getActiveClass("/productos")}`}
                                    id="Productos"
                                >
                                    Productos
                                    <img src="/img/seteHeader.svg" alt="" id="seteHeader" />
                                </Link>
                                {hoveredDropdown === "profile" && <DropDrownProfile />}
                            </div>
                        </li>

                        <li>
                            <div
                                className="dropdown-container"
                                onMouseEnter={() => handleMouseEnter("menu")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to="/marcas"
                                    className={`nav-item ${getActiveClass("/marcas")}`}
                                    id="Marcas"
                                >
                                    Marcas
                                    <img src="/img/seteHeader.svg" alt="" id="seteHeader" />
                                </Link>
                                {hoveredDropdown === "menu" && <DropDrownMarca />}
                            </div>
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

                <div className="menu-mobile">
                    <figure className="logo">
                        <Link to="/"><img src="/img/logo_electricCompany.svg" alt="" /></Link>
                    </figure>

                    <div className="menu-mobile-bottom">

                        <div className="barResearch">
                            <label htmlFor="searchInput">
                                <span className="lupa"><img src="/img/lupa.png" alt="" /></span>
                            </label>
                            <input type="text" id="searchInput" placeholder="Buscar productos" />
                        </div>

                        <figure className="sanduiche">
                            <Link to="/"><img src="/img/sanduiche.svg" alt="" /></Link>
                        </figure>

                    </div>
                </div>

            </header>
        </>
    );
}
