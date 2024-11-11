import '../assets/css/login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Login() {

        const [isPasswordVisible, setPasswordVisible] = useState(false);

        return (
            <>
                <section className='login'>
                    <div className="accountLogin">
                        <h1>Inicia sesión en tu cuenta</h1>

                        <div className="loggingIn">
                            <div className="email">
                                <input type="text" name='email' id='email' placeholder='Introduce tu correo electrónico' required />
                            </div>
                            <div className="senha">
                                <input type={isPasswordVisible ? 'text' : 'password'} name='senha' id='senha' placeholder='Introduce tu contraseña' required />
                                <img src="/img/olho.svg" alt="Mostrar/Ocultar senha" onClick={() => setPasswordVisible(!isPasswordVisible)}
                                    style={{ cursor: 'pointer' }} />
                            </div>

                            <div className="button-login">
                                <button>Entrar</button>
                            </div>

                            <div className="information-Login">
                                <Link id='link' to="/loginCliente"><p>¿No tienes una cuenta? <span className='bold'>Crea uno aquí</span></p></Link>
                                <p>Olvidé mi contraseña</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }