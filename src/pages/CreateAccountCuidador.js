import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function CreateAccountCuidador() {
  return (
    <div className="App">
      <header className="cuidador-header">
      <i className="fa fa-arrow-left"></i>
        <div>Crie a sua conta!</div>
      </header>
      <body className='cuidador-body'>
        <form className='cuidador-form'>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Celular" />
            <input type="text" placeholder="Endereço" />
            <p>Selecione o perfil:</p>
              <div className='cuidador-checkbox'>
                <label>
                  <input type="radio" name="perfil" value="Paciente" checked />
                  Paciente
                </label>
                <label>
                  <input type="radio" name="perfil" value="Cuidador" />
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