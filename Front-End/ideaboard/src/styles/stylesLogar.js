import styled from "styled-components"; //importa os modulos do styled componentes

/**
 * Estiliza o container utilizado na pagina de login.
 */

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

/**
 * Estiliza o form utilizado na pagina de login.
 */

export const Form = styled.form`
    width: 600px;
    height: 310px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid  #102A3C;
    border-radius: 10px;
    align-items: center;
    p
    {
        color:  #ff3333;
        margin-bottom: 15px;
        border: 1px solid  #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input
    {
        height: 30px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        &::placeholder
        {
            color: #999;
        }
    }
    #btEntrar
    {
        color: #fff;
        font-size: 16px;
        background:  #253c51;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        cursor: pointer;
    }
    #btCadastrar
    {
        background: #fff;
        margin-top: 10px;
        font-size: 16px;
        height: 56px;
        width: 100%;
        border: 0;
        outline: solid 0.5px transparent;
        transition: outline 0.6s linear;
        margin: 0.5em;
        &: hover
        {
            outline-color: #253c51;
            outline-width: 1px;
        }
    }
    a
    {
        font-size: 16;
        font-weight: bold;
        color: #253c51;
        text-decoration: none;
        font-size: 16px;
    }
    h1
    {
        margin-bottom: 15px;
        color: #253c51;
    }
`;