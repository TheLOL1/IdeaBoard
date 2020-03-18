import { createGlobalStyle } from "styled-components"; //importa o modulo createGlobalStyle do styled componentes
import "font-awesome/css/font-awesome.css"; //importa as fontes

/**
 * Estiliza o body e o html
 */

const GlobalStyle = createGlobalStyle`
* 
{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
}
body, html
{
    background: #102A3C;
    font-family: 'Helvetica Neue, 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
}
`;

export default GlobalStyle; //exporta o estilo global que é utilizado em App.js