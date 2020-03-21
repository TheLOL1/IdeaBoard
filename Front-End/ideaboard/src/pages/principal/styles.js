import styled from "styled-components"; //importa os modulos do styled componentes
import deletar from "../../assets/delete.png";

/**
 * Estiliza a pagina principal da aplicação que é utilizado em index.js
 */

export const Titulo = styled.h1`
    color: white;
`;

export const ContainerTitulo = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerFormAndDeleteButton = styled.div`
    display: flex;
    width: 90%;
    margin-top: 10px;
    padding: 40px;
    border-radius: 15px;
`;

export const Form = styled.form`
    margin-right:30px;
    width: 18%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 40px;
    border-radius: 15px;
    background: yellow;
    input
    {
        background: none;
        outline:none;
        font-size:20px;
        border: 0;
        padding:10px;
    }
    input:focus
    {
        border: solid 1px blue;
        border-radius: 15px;
    }
    #descricao
    {
        background: none;
        outline:none;
        font-size:20px;
        border: 0;
        padding:10px;
        resize: none;
        height: 160px;
    }
    #descricao:focus
    {
        border: solid 1px blue;
        border-radius: 15px;
    }
`;

export const ButtonNewIdea = styled.button`
    color: #fff;
    font-size: 16px;
    background:  #253c51;
    height: 30px;
    border: 0;
    border-radius: 5px;
    width: 10%;
    margin-right: 30px;
    cursor: pointer;
`;

export const ContainerButtonAndSelect = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 50px;
`;

export const DeleteButtonForm = styled.button`
    border: 0;
    cursor: pointer;
    background: url(${deletar});
    height: 32px;
    width: 32px;
    position: absolute;
    margin-top: 10px;
    margin-left: 12%;
`;

export const SelectStyle = styled.select`
    background:  #253c51;
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    border: 0;
    border-radius: 5px;
    height: 30px;
    margin-right: 50px;
`;

export const Label = styled.label`
    font-size: 16px;
    color: #fff;
`;

export const ButtonExit = styled.button`
    color: #fff;
    position: absolute;
    background:  none;
    border: 0;
    top: 0;
    right: 0;
    padding: 30px;
    margin-right: 10%;
    font-size: 16px;
    border-radius: 5px;
    background:  #253c51;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
    &:hover
    {
        opacity: 1;
    }
    height: 7%;
`;