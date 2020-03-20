import styled from "styled-components"; //importa os modulos do styled componentes
import deletar from "../../assets/delete.png";

/**
 * Estiliza a pagina principal da aplicação que é utilizado em index.js
 */

export const H1 = styled.h1`
    color: white;
`;

export const Container = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerForm = styled.div`
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

export const Button = styled.button`
    color: #fff;
    font-size: 16px;
    background:  #253c51;
    height: 30px;
    border: 0;
    border-radius: 5px;
    width: 10%;
    margin-right: 30px;
`;

export const ContainerButton = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 50px;
`;

export const DeleteButton = styled.button`
    background-image: url(${deletar});
    height: 32px;
    width: 32px;
    margin-left: 150px;
    margin-top: 10px;
`;