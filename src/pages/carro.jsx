import '../assets/css/carro.css'
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export function Carro() {
    const { cart, createOrder, getCartTotal, updateQuantity } = useCart();

    console.log(cart)

    return (
        <>
            <div className="merchandise">
                <Link to='/' className='no-decoration'>
                    <div className="home-producto">
                        <img src="/img/casa.svg" alt="" id='home' />
                        <p><img src="/img/arrow.svg" alt="" id='arrow' /> Volver</p>
                    </div>
                </Link>
            </div>

            <section className='first-carro'>
                <div className="cart">
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <div className="cart-item" key={item.product._id}>
                                <div className="imgCart">
                                    <img src={item.product.imageUrl} alt={item.product.name} />
                                </div>

                                <div className="cartDescription">
                                    <h3>{item.product.name}</h3>
                                    <h4>S/ {item.product.price}</h4>
                                </div>

                                <div className="cartCounter">
                                    <div className="counter-container">
                                        <button 
                                            className="counter-button" 
                                            onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <div className="counter-value">{item.quantity}</div>
                                        <button 
                                            className="counter-button" 
                                            onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Seu carrinho está vazio.</p>
                    )}
                </div>

                <div className="button-cart">
                    <p>Total: S/ {getCartTotal()}</p>
                    <button onClick={createOrder}>Comprar</button>
                </div>
            </section>
        </>
    );
}