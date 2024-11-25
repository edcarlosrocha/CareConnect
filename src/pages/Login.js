import logo from '../assets/img/Logo.png';
import femaleDoctor from '../assets/img/female-doctor.png';
import '../App.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home-cuidador'); // Redireciona para a página do cuidador
      } else {
        setError(data.message || 'Erro ao realizar login');
      }
    } catch (err) {
      setError('Erro no servidor');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>
      </header>
      <body className='login-body'>
        <img src={femaleDoctor} className="App-logo"/>
        <div className='login-welcome'>
            Bem vindo de volta!
        </div>
        <form className='login-form' onSubmit={handleLogin}>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            {error && <div className="login-error">{error}</div>}
            <div>Esqueceu seu email?</div>
            <button type="submit">Login</button>
        </form>
        <div className='login-create-account'>
            <h2>Não tem uma conta? </h2>
            <Link to="/create-account-cuidador">
              <h1>Cadastre-se</h1>
            </Link>
        </div>
      </body>
    </div>
  );
}

export default Login;
