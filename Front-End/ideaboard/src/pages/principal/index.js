import React, { useEffect, useState } from "react"; //importa modulos do react
import {Titulo, ContainerTitulo, Form, ButtonNewIdea, ContainerButtonAndSelect, DeleteButtonForm, SelectStyle, Label, ContainerFormAndDeleteButton, ButtonExit} from "./styles"; //importa os estilos definidos em styles.js
import Api from "../../services/Api"; //importa o axios definido em services
import { deslogar, getToken } from "../../services/auth"; //importa o método de logar definido em auth.js

/**
 * Exporta a pagina principal da aplicação.
 */

export default function Principal({history})
{
    const [ideias,setIdeias] = useState([]); //define o estado ideia juntamente com seu metodo de set e seta o estado inicial como array vazio
    const [exibirDelete,setExibirDelete] = useState(false); //define o estado exibirDelete juntamente com seu metodo de set e seta o estado inicial como false
    const [exibirSalvandoAlteracoes,setExibirSalvandoAlteracoes] = useState(false); //define o exibirSalvandoAlteracoes descricao juntamente com seu método de set e seta o estado inicial como false
    const user_id = getToken() //retorna o id do usúario logado

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
            const novoArray = ideias.slice(); //copia os dados para um novo array
            novoArray.unshift(resposta.data) //adiciona a nova ideia na primeira posição do array e realiza um shift para atualizar posicoes dos restante
            setIdeias(novoArray)
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
     * Realiza o logout da aplicação removendo o token do local storage.
     */

    function logout()
    {
       deslogar();
       history.push("/");
    }

    /**
     * Altera o estado de exibirDelete para true se o usúario estiver com o mouse em cima do botão de deletar ideia e com isso irá tornar visivel.
     */

    function tornarVisivelDeletarIdeia ()
    {
        setExibirDelete(true);
    }

    /**
     * Altera o estado de exibirDelete para false se o usúario não estiver com o mouse em cima do botão de deletar ideia e com isso irá tornar invisivel.
     */

    function tonarInvisivelDeletarIdeia()
    {
        setExibirDelete(false);
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
                <SelectStyle>
                    <option value="maisrecentes" defaultValue>Mais recentes</option>
                    <option value="maisantigas">Mais antigas</option>
                </SelectStyle>
                {exibirSalvandoAlteracoes ? <Label>Salvando alterações...</Label> : null}
            </ContainerButtonAndSelect>
            <ContainerFormAndDeleteButton>
                {ideias.map(ideia =>
                            (
                                <Form key={ideia._id} onMouseEnter={() => tornarVisivelDeletarIdeia()} onMouseLeave={() => tonarInvisivelDeletarIdeia()}>
                                    {exibirDelete ? <DeleteButtonForm type="submit" onClick={e => deletarIdeia(e,ideia._id)}></DeleteButtonForm> : null}
                                    <input type="text" placeholder="Título da Ideia" defaultValue={ideia.titulo} onChange={e => atualizarIdeiaTitulo(e.target.value,ideia._id)}/>
                                    <textarea id="descricao" type="text" placeholder="Descreva a Ideia" defaultValue={ideia.descricao} onChange={e =>atualizarIdeiaDescricao(e.target.value,ideia._id)}/>
                                </Form>
                            )
                        )
                }
            </ContainerFormAndDeleteButton>
        </>
    );
}