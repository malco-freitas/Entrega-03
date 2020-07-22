import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
    render() {
        return(
            <div className="pagina">   
            <div className="caixaLogin">
                <h1>Login</h1>
                <h2>Digite seu Login:</h2>
                <div className="entradaLogin"></div>
                <h2>Digite sua senha:</h2>
                <div className="entradaSenha"></div>
                <div className="botaoEntrar">Entrar</div>
            </div>
        </div>  
            );
    }
}

export default Login;