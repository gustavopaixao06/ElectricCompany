import '../assets/css/login.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUser } from '../context/UserContext'; // Importa o contexto de usuário
import { toast } from 'sonner'; // Usando uma biblioteca de toasts para feedback do usuário (opcional)

export function Login() {
    const { login } = useUser(); // Utiliza o método de login do contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Adicionando um estado para controle de carregamento
    const navigate = useNavigate(); // Para redirecionar após o login

    // Função que trata o login do usuário
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Por favor, preencha todos os campos');
            return;
        }

        setIsLoading(true); // Inicia o carregamento
        try {
            const credentials = { email, password };
            const data = await login(credentials); // Realiza o login
            if (data) {
                navigate('/'); // Redireciona para a página principal após login
            }
        } catch (error) {
            toast.error(error.message || 'Erro ao fazer login'); // Exibe o erro
        } finally {
            setIsLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <>
            <section className='login'>
                <div className="accountLogin">
                    <h1>Inicia sesión en tu cuenta</h1>

                    <div className="loggingIn">
                        <div className="email">
                            <input
                                type="email"
                                name='email'
                                id='email'
                                placeholder='Introduce tu correo electrónico'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="senha">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                name='senha'
                                id='senha'
                                placeholder='Introduce tu contraseña'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <img
                                src="/img/olho.svg"
                                alt="Mostrar/Ocultar senha"
                                onClick={() => setPasswordVisible(!isPasswordVisible)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>

                        <div className="button-login">
                            <button 
                                onClick={handleLogin} 
                                disabled={isLoading} // Desabilita o botão enquanto carrega
                            >
                                {isLoading ? 'Carregando...' : 'Entrar'} {/* Mostra "Carregando..." enquanto a requisição está sendo processada */}
                            </button>
                        </div>

                        <div className="information-Login">
                            <Link id='link' to="/loginCliente">
                                <p>¿No tienes una cuenta? <span className='bold'>Crea uno aquí</span></p>
                            </Link>
                            <p>Olvidé mi contraseña</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}