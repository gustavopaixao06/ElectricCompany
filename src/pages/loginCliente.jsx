import '../assets/css/loginCliente.css'
import { Link } from "react-router-dom";

export function LoginCliente() {
    return (
        <>
            <section className='login'>
                <div className="createAccount">
                    <h1>Crea una cuenta</h1>

                    <div className="account">
                        <div className="top">
                            <input type="text" name='nome' id='nome' placeholder='Nombre completo*' required />
                            <input type="text" name='email' id='email' placeholder='Dirección de correo electrónico*' required />
                            <input type="text" name='telefone' id='telefone' placeholder='Telefone*' required />
                        </div>
                        <div className="low">
                            <input type="text" name='confirmaSenha' id='confirmaSenha' placeholder='Confirma tu contraseña*' required />
                            <input type="text" name='senha' id='senha' placeholder='Contraseña*' required />
                        </div>
                    </div>

                    <div className="button-accout">
                        <button>Crear</button>
                    </div>

                    <Link id='link' to="/login"><p>¿Ya tienes una cuenta? <span className='bold'>Entra aquí</span></p></Link>
                </div>
            </section>
        </>
    )
}