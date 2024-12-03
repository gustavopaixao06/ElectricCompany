import '../assets/css/loginCliente.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUser } from '../context/UserContext'; // Importa o contexto de usuário
import { toast } from 'sonner'; // Biblioteca de feedback opcional

export function LoginCliente() {
    const { register } = useUser(); // Usa o método de registro do contexto
    const [formData, setFormData] = useState({
        name: '', // Alterado de 'nome' para 'name'
        email: '',
        phone: '',
        password: '',
        confirmaSenha: ''
    });
    const [isLoading, setIsLoading] = useState(false); // Estado para carregar enquanto registra
    const navigate = useNavigate(); // Para redirecionamento após registro

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, confirmaSenha } = formData;

        if (!name || !email || !phone || !password || !confirmaSenha) {
            toast.error('Por favor, preencha todos os campos');
            return;
        }

        if (password !== confirmaSenha) {
            toast.error('As senhas não coincidem');
            return;
        }

        setIsLoading(true); // Inicia o carregamento
        try {
            const data = { name, email, phone, password }; // Certifique-se que os dados estão sendo enviados corretamente
            await register(data); // Registra o usuário através do contexto
            toast.success('Conta criada com sucesso!');
            navigate('/login'); // Redireciona para a página de login
        } catch (error) {
            toast.error(error.message || 'Erro ao criar conta');
        } finally {
            setIsLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <>
            <section className='login'>
                <div className="createAccount">
                    <h1>REGISTRATE</h1>

                    <div className="account">
                        <div className="top">
                            <input
                                type="text"
                                name="name" 
                                id="nome"
                                placeholder="Nombre completo*"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Dirección de correo electrónico*"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                id="telefone"
                                placeholder="Telefone*"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="low">
                            <input
                                type="password"
                                name="password"
                                id="senha"
                                placeholder="Contraseña*"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                name="confirmaSenha"
                                id="confirmaSenha"
                                placeholder="Confirma tu contraseña*"
                                required
                                value={formData.confirmaSenha}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="button-accout">
                        <button onClick={handleRegister} disabled={isLoading}>
                            {isLoading ? 'Carregando...' : 'Crear'}
                        </button>
                    </div>

                    <Link id="link" to="/login">
                        <p>¿Ya tienes una cuenta? <span className="bold">Ingresa aqui</span></p>
                    </Link>
                </div>
            </section>
        </>
    );
}