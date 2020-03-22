import React, { Component } from "react"; //importa modulos do react
import { Link, withRouter } from "react-router-dom"; //importa modulos do react-router-dom
import {Form, Container} from "../../styles/stylesLogar"; //importa os estilos definidos em styles.js
import Api from "../../services/Api"; //importa o axios definido em services
import { login } from "../../services/auth"; //importa o método de logar definido em auth.js

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

    handleLogar = async e =>
    {
        e.preventDefault();
        const {email,senha} = this.state;
        if (!email || !senha)
        {
            this.setState({error: "Preencha e-mail e senha para continuar!"});
        }
        else
        {
            const resposta = await Api.post("/sessao",{email});
            const userPesquisa = resposta.data;
            if (!userPesquisa)
            {
                this.setState({error: "Este usúario não existe!"});
            }
            else if (userPesquisa.senha === senha)
            {
                login(userPesquisa._id);
                this.props.history.push("/principal");
            }
            else
            {
                this.setState({error: "Senha incorreta!"});
            }
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
                    <h1>Quadro de Ideias</h1>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})}/>
                    <input type="password" placeholder="Senha" onChange={e => this.setState({senha: e.target.value})}/>
                    <button id="btEntrar" type="submit">ENTRAR</button>
                    <button id="btCadastrar"><Link to="/cadastrar">CADASTRAR</Link></button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Logar); //exporta a classe que é utilizada em routes.js e adiciona no historico do props