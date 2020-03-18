import React, {Fragment} from 'react'; //importa modulos do react.
import Routes from "./routes"; //importa as rotas definidas em routes.js
import GlobalStyle from "./styles/global" //importa o estilo global que está em styles

const App = () => <Fragment><Routes/><GlobalStyle/></Fragment>; //define a aplicação

export default App; //exporta a aplicação que é utilizada em index.js
