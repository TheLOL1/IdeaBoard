import React, { useEffect, useState } from "react"; //importa modulos do react
import {Titulo, ContainerTitulo, Form, ButtonNewIdea, ContainerButtonAndSelect, SelectStyle, Label, ContainerFormAndDeleteButton, ButtonExit} from "../../styles/stylesPrincipal"; //importa os estilos definidos em /styles/stylesPrincipal.js
import Api from "../../services/Api"; //importa o axios definido em services
import { deslogar, getToken } from "../../services/auth"; //importa os métodos de deslogar e getToken definidos em auth.js

/**
 * Exporta a pagina principal da aplicação.
 */

export default function Principal({history})
{
    const [ideias,setIdeias] = useState([]); //define o estado ideia juntamente com seu metodo de set e seta o estado inicial como array vazio
    const [exibirSalvandoAlteracoes,setExibirSalvandoAlteracoes] = useState(false); //define o exibirSalvandoAlteracoes juntamente com seu método de set e seta o estado inicial como false
    const [selected,setSelected] = useState("dec"); //define o selected juntamente com seu método de set e seta o estado inicial como "dec"
    const user_id = getToken() //retorna o id do usúario logado

    /**
     * Realiza um get na API que irá retornar as ideias vinculadas ao usúario logado e seta o estado de ideias, se o usúario não tiver nenhuma ideia vinculada é chamado o método inserirIdeia().
     */

    async function carregarIdeias(sort)
    {
        await Api.get("/listIdeasUser",{
            headers: {user_id,
                sort //realiza a ordenação das ideias baseadas com o que foi escolhido no select
            }
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
     * Ao carregar a pagina chama o carregarIdeias().
     */

    useEffect(() =>
    {
        carregarIdeias(selected);
    },[]);

    /**
     * Realiza um post na API para inserir uma nova ideia e atualiza o estado de ideias para atualizar a interface.
     */

    async function inserirIdeia()
    {
        await Api.post("/insertIdea",{
            titulo: "",
            descricao: ""
        },{
            headers: {user_id}
        }).then(function (resposta)
        {
            if (selected === "dec")
            {
                const novoArray = ideias.slice(); //copia os dados para um novo array
                novoArray.unshift(resposta.data); //adiciona a nova ideia na primeira posição do array pois esta selecionado no select mais recentes e realiza um shift para atualizar posicoes dos restantes
                setIdeias(novoArray);
            }
            else
            {
                const novoArray = ideias.slice(); //copia os dados para um novo array
                novoArray.push(resposta.data); //adiciona a nova ideia na ultima posição do array pois esta selecionado no select mais antigos
                setIdeias(novoArray);
            }
        });
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
     * Realiza o logout da aplicação removendo o token do local storage e chama a rota de login.
     */

    function logout()
    {
       deslogar();
       history.push("/");
    }


    /**
     * Realiza um post na API para salvar as alterações realizadas no titulo da ideia.
     */

    async function atualizarIdeiaTitulo(titulo,idea_id)
    {
        setExibirSalvandoAlteracoes(true);
        await Api.post("/updateIdea",{
            titulo
        },{
            headers:{idea_id}
        }).then(function(){
            setExibirSalvandoAlteracoes(false);
        });
    }

    /**
     * Realiza um post na API para salvar as alterações realizadas na descrição da ideia.
     */

    async function atualizarIdeiaDescricao(descricao,idea_id)
    {
        setExibirSalvandoAlteracoes(true);
        await Api.post("/updateIdea",{
            descricao
        },{
            headers:{idea_id}
        }).then(function(){
            setExibirSalvandoAlteracoes(false);
        });
    }
    

    /**
     * Define o HTML da pagina.
     */


    return (
        <>
            <ContainerTitulo>
                <Titulo>Quadro de Ideias</Titulo>
                <ButtonExit type="submit" onClick={() => logout()}>SAIR</ButtonExit>
            </ContainerTitulo>
            <ContainerButtonAndSelect>
                <ButtonNewIdea type="submit" onClick={() => inserirIdeia()}>Nova Ideia</ButtonNewIdea>
                <Label>Ordenar as ideias por:</Label>
                <SelectStyle onChange={e => {setSelected(e.target.value); carregarIdeias(e.target.value);}}>
                    <option value="dec" defaultValue>Mais recentes</option>
                    <option value="cre">Mais antigas</option>
                </SelectStyle>
                {exibirSalvandoAlteracoes ? <Label>Salvando alterações...</Label> : null}
            </ContainerButtonAndSelect>
            <ContainerFormAndDeleteButton>
                    {ideias.map(ideia =>
                                (
                                    <Form key={ideia._id}>
                                        <input type="text" placeholder="Título da Ideia" defaultValue={ideia.titulo} onChange={e => atualizarIdeiaTitulo(e.target.value,ideia._id)}/>
                                        <textarea id="descricao" type="text" placeholder="Descreva a Ideia" defaultValue={ideia.descricao} onChange={e =>atualizarIdeiaDescricao(e.target.value,ideia._id)}/>
                                        <button type="submit" onClick={e => deletarIdeia(e,ideia._id)}></button>
                                    </Form>
                                )
                            )
                    }
            </ContainerFormAndDeleteButton>
        </>
    );
}