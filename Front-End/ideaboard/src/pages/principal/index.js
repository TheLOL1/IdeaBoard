import React, { useEffect, useState } from "react"; //importa modulos do react
import {H1, Container, ContainerForm, Form, Button, ContainerButton, DeleteButton} from "./styles"; //importa os estilos definidos em styles.js
import Api from "../../services/Api"; //importa o axios definido em services
import { deslogar, getToken } from "../../services/auth"; //importa o método de logar definido em auth.js
import Select from 'react-select'; //importa o select do react

/**
 * Exporta a pagina principal da aplicação.
 */

export default function Principal()
{
    const [ideias,setIdeias] = useState([]); //define o estado ideia juntamente com seu metodo de set, e seta o estado inicial como array vazio
    const user_id = getToken() //retorna o id do usúario logado

    /**
     * Array com as opções do select.
     */

    const opcoesOrdenar =
    [
        {
            value: "maisrecentes",
            label: "Mais recentes"
        },
        {
            value: "maisantigos",
            label: "Mais antigos"
        }
    ]

    /**
     * Realiza um get na API que irá retornar as ideias vinculadas ao usúario logado e seta o estado de ideias, se o usúario não tiver nenhuma ideia vinculada é chamado o método inserirIdeia().
     */

    async function carregarIdeias()
    {
        await Api.get("/listIdeasUser",{
            headers: {user_id}
        }).then(function (resposta)
        {
            setIdeias(resposta.data);
            if (resposta.data.length === 0)
            {
                inserirIdeia();
            }
        });
    }

    /**
     * Ao carregar a pagina chama o carregarIdeias() e se o usúario não possuir nehuma ideia inserida no banco de dados chama o inserirIdeia().
     */

    useEffect(() =>
    {
        carregarIdeias();
    },[]);

    /**
     * Realiza um post na API para inserir uma nova ideia e chama o carregar ideias para pode ser criado um novo form. 
     */

    async function inserirIdeia()
    {
        await Api.post("/insertIdea",{
            titulo: "",
            descricao: ""
        },{
            headers: {user_id}
        });
        carregarIdeias();
    }

    /**
     * Realiza um delete na API para remover uma ideia a partir do seu id, filtra o array de ideias para atualizar a interface e previne o botão de recarregar a pagina.
     */

    async function deletarIdeia(e,idea_id)
    {
        e.preventDefault();
        await Api.delete("/removeIdea",{
            headers: {idea_id}
        }).then(function ()
        {
            setIdeias(ideias.filter(ideia => ideia._id !== idea_id));  
        }); 
    }
    

    /**
     * Define o HTML da pagina.
     */


    return (
        <>
            <Container>
                <H1>Quadro de Ideias</H1>
            </Container>
            <ContainerButton>
                <Button type="submit" onClick={() => inserirIdeia()}>Nova Ideia</Button>
                <Select options={opcoesOrdenar} defaultValue={opcoesOrdenar[0]} />
            </ContainerButton>
            <ContainerForm>
                {ideias.map(ideia =>
                            (
                                <Form key={ideia._id}>
                                <DeleteButton onClick={e => deletarIdeia(e,ideia._id)}></DeleteButton>
                                <input type="text" placeholder="Título da Ideia" defaultValue={ideia.titulo}/>
                                <textarea id="descricao" type="text" placeholder="Descreva a Ideia" defaultValue={ideia.descricao}/>
                                </Form>
                            )
                        )
                }
            </ContainerForm>
        </>
    );
}