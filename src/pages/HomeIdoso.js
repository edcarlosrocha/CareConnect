import '../App.css';
import logo from '../assets/img/Logo.png';
import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';

function HomeIdoso() {
  return (
    <div className="App">
      <Header>  </Header>
      <body className='home-cuidador-body'>
        <div>
            <button>
                <Link to="/lista-cuidadores">
                    Encontre Cuidador
                </Link>
            </button>
            <button>
                <Link to="/perfil-idoso">
                    Editar Paciente
                </Link>
            </button>
            <button>
                Notificações
            </button>
            <button>
                Pagamentos
            </button>
            <button>
                <Link to="/">
                    Início
                </Link>
            </button>
        </div>
      </body>
    </div>
  );
}

export default HomeIdoso;