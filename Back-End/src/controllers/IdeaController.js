const Idea = require("../models/Idea"); //define o Post que está em models.

/**
 * Define o método de armazenar e retornar da API da parte de Ideias.
 */

module.exports = {
    //retorna todas as ideias da tabela
    async index(req,res)
    {
        const ideas = await Idea.find();
        return (res.json(ideas));
    },
    //insere no banco de dados uma nova ideia na tabela
    async store(req,res)
    {
        const { titulo,descricao } = req.body;
        const Ideia = {
            title: titulo,
            description: descricao
        }
        const idea = await Idea.create({
            titulo: Ideia.title,
            descricao: Ideia.description,
        })

        return (res.json( idea ));
    }
};