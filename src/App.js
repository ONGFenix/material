import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom';

import './style.css'

import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';



class App extends Component {

  constructor(props){
    super(props);
    this.validateLogin = this.validateLogin.bind(this);
    this.state = {
      isLoggedIn: false
    }
  }

  validateLogin = () => {
    let password = document.getElementById('senha');
    if(password.value === 'ongfenix8576'){
      console.log('test');
      this.setState({isLoggedIn: true});
    }else{
      alert("Senha incorreta");
    }
    console.log(this.state);
  }

  Login = () =>(
    <div className="login">
        <h1>Insira a senha de acesso para o material</h1>
        <form className="loginForm" onSubmit={this.validateLogin}>
            <input type="password" id="senha" placeholder="Senha"/>
            <input type="submit" value="Entrar"/>
        </form>
    </div>
  )


  Middle = () => {
    if (this.state.isLoggedIn) {
      return (
        <div className="middle">
          <Sidebar />
          <Routes />
        </div>
      );
    } else {
      return (
        <div className="middle">
          {this.Login()}
        </div>
      );
    }
  }
  
  render(){
    return(
      <div className="App">
        <HashRouter basename="/material">
          <Header />
            {this.Middle()}
        </HashRouter>
      </div>
    )
  }
}


export default App;