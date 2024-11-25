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
                Meu Paciente
            </button>
            <button>
                Editar Perfil
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