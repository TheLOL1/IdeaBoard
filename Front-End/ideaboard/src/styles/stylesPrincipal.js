import styled from "styled-components"; //importa os modulos do styled componentes
import deletar from "../assets/delete.png";

/**
 * Estiliza o h1 utilizado da pagina principal
 */

export const Titulo = styled.h1`
    color: #253c51;
    font-size: 50px;
`;

/**
 * Estiliza a div do titulo utilizada da pagina principal
 */

export const ContainerTitulo = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/**
 * Estiliza a div do form e do botão de delete da pagina principal.
 */

export const ContainerFormAndDeleteButton = styled.div`
    display: grid;
    width: 100%;
    margin-top: 30px;
    padding: 40px;
    border-radius: 15px;
    grid-template-columns: 33% 34% 33%;
    margin-right: 10px;
`;

/**
 * Estiliza o form da pagina principal.
 */

export const Form = styled.form`
    margin-right:30px;
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: #fff;
    border: 1px solid  #102A3C;
    margin-right: 5%;
    margin-bottom: 5%;
    input
    {
        background: none;
        outline:none;
        font-size:25px;
        border: 0;
        padding: 2.5%;
        color: #102A3C;
        font-weight: bold;
        width: 95%;
        margin-left: 2.5%;
        margin-right: 2.5%;
    }
    #descricao
    {
        background: none;
        outline: none;
        font-size: 20px;
        margin: 2.5%;
        resize: none;
        height: 160px;
        width: 95%;
        border: solid 1px #102A3C;
        border-radius: 15px;
        color: #102A3C;
        padding: 2%;
    }
    button
    {
        border: 0;
        cursor: pointer;
        background: url(${deletar});
        height: 32px;
        width: 32px;
        margin-left: 45%;
    }
`;

/**
 * Estiliza o botão de nova ideia da pagina principal.
 */

export const ButtonNewIdea = styled.button`
    color: #fff;
    font-size: 16px;
    background:  #253c51;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 10%;
    margin-right: 10px;
    cursor: pointer;
`;

/**
 * Estiliza a div do botão de nova ideia e do select da pagina principal.
 */

export const ContainerButtonAndSelect = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 50px;
`;

/**
 * Estiliza o select da pagina principal.
 */

export const SelectStyle = styled.select`
    background:  #253c51;
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 10%;
    text-align-last: center;
`;

/**
 * Estiliza a label da pagina principal.
 */

export const Label = styled.label`
    font-size: 16px;
    color: #253c51;
    margin-left: 10px;
`;

/**
 * Estiliza o botão de sair da pagina principal.
 */

export const ButtonExit = styled.button`
    color: #fff;
    position: absolute;
    background:  none;
    border: 0;
    top: 0;
    right: 0;
    padding: 30px;
    font-size: 16px;
    border-radius: 5px;
    background:  #253c51;
    cursor: pointer;
    margin-right: 10px;
    opacity: 0.6;
    transition: 0.3s;
    &:hover
    {
        opacity: 1;
    }
    height: 7%;
`;

/**
 * Estiliza a div do grid da pagina principal.
 */

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;