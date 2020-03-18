import React, { Component } from "react";//importa modulos do react
import { Link, withRouter } from "react-router-dom";//importa modulos do react-router-dom
import {Form, Container} from "./styles";//importa os estilos definidos em styles.js

/**
 * Classe que renderiza a pagina de login e manipula os seus estados.
 */

class Logar extends Component
{
    /**
     * Define o estado inicial de email, senha e error.
     */

    state =
    {
        email: "",
        senha: "",
        error: ""
    };

    /**
     * Quando o usúario clica em "ENTRAR" verifica se todos os campos foram preenchidos, se não altera o estado de error,previne que a pagina volte para o estado padrão e por fim realiza a autenticação na API e chama a tela principal.
     */

    handleLogar = e =>
    {
        e.preventDefault();
        const {email,senha} = this.state;
        if (!email || !senha)
        {
            this.setState({error: "Preencha e-mail e senha para continuar!"});
        }
        else
        {
            this.props.history.push("/principal");
        }
    };

    /**
     * Define o HTML da pagina.
     */

    render()
    {
        return (
            <Container>
                <Form onSubmit={this.handleLogar}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})}/>
                    <input type="password" placeholder="Senha" onChange={e => this.setState({senha: e.target.value})}/>
                    <button type="submit">ENTRAR</button>
                    <hr />
                    <Link to="/cadastrar">CADASTRAR</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Logar);//exporta a classe que é utilizada em routes.js e adiciona no historico do props