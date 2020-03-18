import styled from "styled-components";//importa os modulos do styled componentes

/**
 * Estiliza o container utilizado na pagina de cadastro.
 */

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

/**
 * Estiliza o form utilizado na pagina de cadastro.
 */

export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p
    {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input
    {
        flex: 1;
        height: 46px;
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
    button
    {
        color: #fff;
        font-size: 16px;
        background: #253c51;
        height: 56px;
        border: 0;
        border-radiux: 5px;
        width: 100%;
    }
    hr
    {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a
    {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
`;