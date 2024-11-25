import '../App.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function CreateAccountCuidador() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [perfil, setPerfil] = useState('Paciente');  // Default to "Paciente"
  const navigate = useNavigate();

  // Função para capturar o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuarioData = {
      nome,
      email,
      senha,
      celular,
      endereco,
      perfil,
    };

    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirecionar para a página de login após sucesso
        navigate('/login');
      } else {
        const error = await response.json();
        alert(error.message || 'Erro ao criar conta');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na comunicação com o servidor');
    }
  };

  return (
    <div className="App">
      <header className="cuidador-header">
      <i className="fa fa-arrow-left"></i>
        <div>Crie a sua conta!</div>
      </header>
      <body className='cuidador-body'>
        <form className='cuidador-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            <input type="text" placeholder="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} required />
            <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
            <p>Selecione o perfil:</p>
              <div className='cuidador-checkbox'>
                <label>
                  <input type="radio" name="perfil" value="Paciente" checked={perfil === 'Paciente'} onChange={(e) => setPerfil(e.target.value)} />
                  Paciente
                </label>
                <label>
                  <input type="radio" name="perfil" value="Cuidador" checked={perfil === 'Cuidador'} onChange={(e) => setPerfil(e.target.value)} />
                  Cuidador
                </label>
              </div>
            <button>Login</button>
        </form>
        <div className='create-account-login'>
            <h2>Você já tem uma conta? </h2>
            <Link to="/login">
              <h1>Faça Login</h1>
            </Link>
        </div>
      </body>
    </div>
  );
}

export default CreateAccountCuidador;