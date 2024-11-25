import '../App.css';
import logo from '../assets/img/Logo.png';
import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';

function HomeCuidador() {
  return (
    <div className="App">
      <Header>  </Header>
      <body className='home-cuidador-body'>
        <div>
            <button>
                <Link to="/perfil-idoso">
                    Meu Paciente
                </Link>
            </button>
            <button>
                <Link to="/perfil-cuidador">
                    Editar Perfil
                </Link>
            </button>
            <button>
                Notificações
            </button>
            <button>
                Disponibilizar Antecedentes
            </button>
            <button>
                Início
            </button>
        </div>
      </body>
    </div>
  );
}

export default HomeCuidador;