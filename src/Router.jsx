import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { Nosotros } from './pages/nosotros';
import { Contacto } from './pages/contacto';
import { Producto } from './pages/producto';
import { Carro } from './pages/carro';
import { Productos } from './pages/productos';
import { Ofertas } from './pages/ofertas';
import { Favoritos } from './pages/favoritos';
import { LoginCliente } from './pages/loginCliente';
import { Login } from './pages/login';
import { AtualizarProdutos } from './pages/atualizarProdutos';

const AppRoutes = () => {
    const location = useLocation();
    const isSpecialPage = location.pathname === '/atualizarProdutos';

    return (
        <>
            {!isSpecialPage && <Header />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/producto' element={<Producto />} />
                <Route path='/carro' element={<Carro />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/ofertas' element={<Ofertas />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/loginCliente' element={<LoginCliente />} />
                <Route path='/login' element={<Login />} />
                <Route path='/atualizarProdutos' element={<AtualizarProdutos />} />
            </Routes>
            {!isSpecialPage && <Footer />}
        </>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default Router;
