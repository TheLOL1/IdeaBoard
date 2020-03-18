const express = require("express"); //define o express dos modulos do node

const routes = new express.Router(); //define o routes dos modulos do router

const IdeaController = require("./controllers/IdeaController"); //define o IdeaController que está em controllers

const UserController = require("./controllers/UserController"); //define o UserController que está em controllers

const baseURL = "http://ideaboard.us-3.evennode.com"; //define a url base da API

/**
 * Define a pagina inicial da API listando seus métodos.
 */

routes.get("/",(req,res) =>
{
    return res.json({
        MetodosIdeia: {
            Inserir: `${baseURL}/insertIdea/?user_id=<id>`,
            Listar: `${baseURL}/listIdeas`,
            Alterar: `${baseURL}/updateIdea/?idea_id=<id>`,
            Remover: `${baseURL}/removeIdea/?idea_id=<id>`
        },
        MetodosUsuario: {
            Inserir: `${baseURL}/createUser`
        },
    })
})

/**
 * Realiza um post em "/insertIdea" que irá inserir no banco de dados na tabela ideia.
 */

routes.post("/insertIdea",IdeaController.store);

/**
 * Realiza um get em "/listIdeas" que irá retornar todas as ideias inseridas na tabela ideia.
 */

routes.get("/listIdeas",IdeaController.index);

/**
 * Realiza um get em "/listIdeasUser" que irá retorna todas as ideias de um determinado Usúario.
 */

routes.get("/listIdeasUser",IdeaController.show)

/**
 * Realiza um post em "/updateIdea" que irá alterar uma ideia já inserida no banco de dados.
 */

routes.post("/updateIdea",IdeaController.update);

/**
 * Realiza um delete em "/deleteIdea" que irá deletar uma ideia inserida no banco de dados.
 */

routes.delete("/removeIdea",IdeaController.destroy);

/**
 * Realiza um post em "/createUser" que irá inserir no banco de dados na tabela User.
 */

routes.post("/createUser",UserController.store);

module.exports = routes; //exporta routes
