import logo from '../assets/img/Logo.png';
import femaleDoctor from '../assets/img/female-doctor.png';
import '../App.css';

function Login() {
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
        <form className='login-form'>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <div>Esqueceu seu email?</div>
            <button>Login</button>
        </form>
        <div className='login-create-account'>
            <h2>Não tem uma conta? </h2>
            <h1>Cadastre-se</h1>
        </div>
      </body>
    </div>
  );
}

export default Login;
