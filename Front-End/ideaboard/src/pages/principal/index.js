import React, { useEffect, Component } from "react"; //importa modulos do react
import {H1, Container} from "./styles"; //importa os estilos definidos em styles.js
import Api from "../../services/Api"; //importa o axios definido em services
import { deslogar, getToken } from "../../services/auth"; //importa o método de logar definido em auth.js

/**
 * Exporta a pagina principal da aplicação.
 */

export default function Principal()
{
    useEffect(() =>
    {
        async function carregarIdeias()
        {
            const resposta = await Api.get("/listIdeasUser",{
                headers: {user_id: getToken()}
            });
            console.log(resposta.data);
        }
        carregarIdeias();
    },[]);
    return (
            <Container>
            <H1>Quadro de Ideias</H1>
            </Container>
    );
}