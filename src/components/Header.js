import '../App.css';
import logo from '../assets/img/Logo.png';
import perfil from '../assets/img/perfil.png';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
    return (
      <div className="App">
        <header className="header-global">
            <div className='header-menu'>
                <img src={logo} className="logo-header"/>
                <i className="fa fa-bars"></i>
            </div>
            <div className='perfil-header'>
                <img src={perfil} />
                <h2>Olá, Jéssica</h2>
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;