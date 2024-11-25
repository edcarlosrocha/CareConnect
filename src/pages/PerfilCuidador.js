import '../App.css';
import idoso from '../assets/img/cuidador.png';
import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';

function PerfilCuidador() {
  return (
    <div className="App">
      <Header>  </Header>
      <body className='perfil-idoso-header'>
        <div className='perfil-idoso-header-div'>
            <p>Perfil do Paciente</p>
            <div>
                <img src={idoso}/>
                    <div className='dados-idoso'>
                        <h4>Jéssica Jung</h4>
                    </div>
            </div>
            <ul>
                Informações:
                <li>
                    Gênero:
                    <h2>Feminino</h2>
                </li>
                <li>
                    E-mail: 
                    <h2>jessicajung@gmail.com</h2>
                </li>
                <li>
                   Data Nascimento:
                   <h2>05/03/1983</h2>
                </li>
                <li>
                    Cpf:
                    <h2>123.456.789-00</h2>
                </li>
                <li>
                    Endereço:
                    <h2>Rua: Treze de Maio, 57 
                    Campo Belo - São Paulo</h2>
                </li>
                <li>
                   Especialidade:
                   <h2>Cuidadora de idosos</h2>
                </li>
            </ul>
        </div>
      </body>
    </div>
  );
}

export default PerfilCuidador;