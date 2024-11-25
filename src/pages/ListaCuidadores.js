import '../App.css';
import cuidador from '../assets/img/cuidador.png';
import Header from "../components/Header";
import React from 'react';
import { Link } from 'react-router-dom';

function ListaCuidadores() {
  return (
    <div className="App">
      <Header>  </Header>
      <body className='perfil-idoso-header'>
        <div className='perfil-idoso-header-div'>
            <p>Lista de Cuidadores </p>
            <ul className='lista-cuidadores'>
              <li>
                <img src={cuidador}/>
                <div className='margin-top'>
                  <h1>Jéssica Jung</h1>
                  <h4>Cuidadora de Idosos</h4>
                  <div className='avaliation'>
                    <i className="fa fa-star"></i>
                    <div>4.8</div>
                  </div>
                </div>
              </li>
              <li>
                <img src={cuidador}/>
                <div className='margin-top'>
                  <h1>Jéssica Jung</h1>
                  <h4>Cuidadora de Idosos</h4>
                  <div className='avaliation'>
                    <i className="fa fa-star"></i>
                    <div>4.8</div>
                  </div>
                </div>
              </li>
              <li>
                <img src={cuidador}/>
                <div className='margin-top'>
                  <h1>Jéssica Jung</h1>
                  <h4>Cuidadora de Idosos</h4>
                  <div className='avaliation'>
                    <i className="fa fa-star"></i>
                    <div>4.8</div>
                  </div>
                </div>
              </li>
              <li>
                <img src={cuidador}/>
                <div className='margin-top'>
                  <h1>Jéssica Jung</h1>
                  <h4>Cuidadora de Idosos</h4>
                  <div className='avaliation'>
                    <i className="fa fa-star"></i>
                    <div>4.8</div>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      </body>
    </div>
  );
}

export default ListaCuidadores;