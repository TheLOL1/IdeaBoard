import React from "react"; //importa os modulos do react
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; //importa os modulos de rota de pagina do react-router-dom
import Cadastrar from "./pages/cadastrar"; //importa a pagina de cadastro presente em pages/cadastrar
import Logar from "./pages/logar"; //importa a pagina de login presente em pages/logar
import { estaAutenticado } from "./services/auth"; //importa o método que verifica se o usúario está autenticado
import Principal from "./pages/principal"; //importa a pagina principal presente em pages/principal

/**
 * Define a rota privada onde so é liberada se o usúario estiver autenticado
 */

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        estaAutenticado() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  

/**
 * Define as rotas da aplicação com os seus respectivos caminhos.
 */

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Logar}/>
        <Route path="/cadastrar" component={Cadastrar}/>
        <PrivateRoute path="/principal" component={Principal}/>
        <Route path="*" component={() => <h1>Pagina não encontrada</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes; //exporta as rotas da aplicação que é utilizada em App.js