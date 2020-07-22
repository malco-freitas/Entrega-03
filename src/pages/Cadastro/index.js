import React, { Component } from "react";
import "./styles.css";

class Cadastro extends Component {
    render() {
        return( 
            <div className="pagina">   
                <div className="caixaCadastro">
                    <h1>Novo Cadastro</h1>
                    <h2>Digite um nome de Login:</h2>
                    <input type="text"/>
                    <div className="entradaLogin"></div>
                    <h2>Digite uma senha:</h2>
                    <input type="password"/>
                    <div className="entradaSenha"></div>
                    <h2>Repita sua senha:</h2>
                    <input type="password"/>
                    <div className="entradaSenha"></div>
                    <div className="botaoLogin">Login</div>
                </div>
            </div>     
        );
    }
}

export default Cadastro;