import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { Nosotros } from './pages/nosotros';
import { Contacto } from './pages/contacto';
import { Producto } from './pages/producto';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/producto' element={<Producto />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;