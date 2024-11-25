import '../App.css';
import idoso from '../assets/img/idoso.png';
import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';

function PerfilIdoso() {
  return (
    <div className="App">
      <Header>  </Header>
      <body className='perfil-idoso-header'>
        <div className='perfil-idoso-header-div'>
            <p>Perfil do Paciente</p>
            <div>
                <img src={idoso}/>
                    <div className='dados-idoso'>
                        <h4>José Alencar de Oliveira</h4>
                    </div>
            </div>
            <ul>
                Informações:
                <li>
                    Gênero:
                    <h2>Masculino</h2>
                </li>
                <li>
                    Tipo Sanguínio: 
                    <h2>O+</h2>
                </li>
                <li>
                   Alergias:
                   <h2>Não</h2>
                </li>
                <li>
                    Diabetes:
                    <h2>Não</h2>
                </li>
                <li>
                    Altura:
                    <h2>1,72 m</h2>
                </li>
                <li>
                   Peso:
                   <h2>72 kg</h2>
                </li>
            </ul>
        </div>
      </body>
    </div>
  );
}

export default PerfilIdoso;