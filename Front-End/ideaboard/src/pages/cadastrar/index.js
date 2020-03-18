import React, { Component } from "react";//importa modulos do react
import { Link, withRouter } from "react-router-dom";//importa modulos do react-router-dom
import {Form, Container} from "./styles";//importa os estilos definidos em styles.js
import Api from "../../services/Api";//importa o axios definido em services

/**
 * Classe que renderiza a pagina de cadastro e manipula os seus estados.
 */

class Cadastrar extends Component
{

    /**
     * Define o estado inicial de email, senha, confirmarSenha e error.
     */
    
    state =
    {
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        error: ""
    };

    /**
     * Quando o usúario clica em "CADASTRAR" verifica se todos os campos foram preenchidos, se não altera o estado de error,previne que a pagina volte para o estado padrão e chama a tela de login.
     */

    handleCadastrar = async e =>
    {
        e.preventDefault();
        const { nome, email, senha, confirmarSenha} = this.state;
        if (!nome || !email || !senha || !confirmarSenha)
        {
            this.setState({error: "Preencha todos os campos para cadastrar!"});
        }
        else if (senha !== confirmarSenha) //verifica se as senhas conferem
        {
            this.setState({error: "As senhas não conferem!"});
        }
        else
        {
           try
           {
                await Api.post("/createUser",{nome, email, senha}); //realiza o post na API que irá inserir on usúario no banco de dados.
                this.props.history.push("/");
           }
           catch (e)
           {
               console.log(e);
               this.setState({error: "Ocorreu um erro ao registrar sua conta!"});
           }
        }
    };

    /**
     * Define o HTML da pagina.
     */

    render()
    {
        return(
            <Container>
                <Form onSubmit={this.handleCadastrar}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type= "text" placeholder="Nome" onChange={e => this.setState({nome: e.target.value})}/>
                    <input type= "email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})}/>
                    <input type= "password" placeholder="Senha" onChange={e => this.setState({senha: e.target.value})}/>
                    <input type= "password" placeholder="Confirmar Senha" onChange={e => this.setState({confirmarSenha: e.target.value})}/>
                    <button type= "submit">CADASTRAR</button>
                    <hr />
                    <Link to="/">LOGAR</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Cadastrar);//exporta a classe que é utilizada em routes.js e adiciona no historico do props