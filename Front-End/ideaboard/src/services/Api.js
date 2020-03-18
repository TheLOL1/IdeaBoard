import Axios from "axios";//importa o axios do seu modulo

/**
 * Inicializa o axios em Api definindo sua url base.
 */

const Api = Axios.create(
    {
        baseURL: "http://127.0.0.1:3333"
    }
);

export default Api;//exporta Api que é utilizado em pages/cadastrar e pages/logar