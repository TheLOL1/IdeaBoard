import React from "react";//importa os modulos do react
import { BrowserRouter, Route, Switch, Redirect as PrivateRoute } from "react-router-dom";//importa os modulos de transição de pagina do react-router-dom
import Cadastrar from "./pages/cadastrar";//importa a pagina de cadastro presente em pages/cadastrar
import Logar from "./pages/logar";//importa a pagina de login presente em pages/logar

/**
 * Define as rotas da aplicação com os seus respectivos caminhos.
 */

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Logar}/>
        <Route path="/cadastrar" component={Cadastrar}/>
        <PrivateRoute path="/principal" Redirect to={{pathname: "/"}} component={() => <h1>Principal</h1>}/>
        <Route path="*" component={() => <h1>Pagina não encontrada</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;//exporta as rotas da aplicação que é utilizada em App.js