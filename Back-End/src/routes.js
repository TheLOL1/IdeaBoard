const express = require("express"); //define o express dos modulos do node

const routes = new express.Router(); //define o routes dos modulos do router

const IdeaController = require("./controllers/IdeaController"); //define o IdeaController que está em controllers

const SessionController = require("./controllers/SessionController"); //define o SessionController que está em controllers

/**
 * Realiza um post em "/insertIdea" que irá inserir no banco de dados na tabela ideia.
 */

routes.post("/insertIdea",IdeaController.store);

/**
 * Realiza um get em "/getIdeas" que irá retornar todas as ideias inseridas na tabela ideia.
 */

routes.get("/listIdeas",IdeaController.index);

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

routes.post("/createUser",SessionController.store);

module.exports = routes; //exporta routes
