const Idea = require("../models/Idea"); //define o Idea que está em models.
const User = require("../models/User"); //define o User que está em models.

/**
 * Exporta os métodos de armazenar, retornar, alterar e deletar da API da parte de Ideias.
 */

module.exports = {
    //retorna todas as ideias da tabela ordenadas com as que foram inseridas mais recentemente
    async index(req,res)
    {
        const ideas = await Idea.find().sort("-createdAt");
        return (res.json(ideas));
    },
    //retorna todas as ideias de um usúario a partir do seu ID ordenandas com as mais recentemente inseridas.
    async show(req,res)
    {
        const ideas = await Idea.find({usuario: req.get("user_id")}).sort("-createdAt");
        return (res.json( ideas ));
    },
    //insere no banco de dados uma nova ideia na tabela
    async store(req,res)
    {
        const Ideia = {
            title: req.body.titulo,
            description: req.body.descricao,
            user_id: req.get("user_id")
        }
        const user = await User.findById(Ideia.user_id);
        if (!user)
        {
            return (res.status(400).json({error: "Usuário não existe"}));
        }
        const idea = await Idea.create({
            titulo: Ideia.title,
            descricao: Ideia.description,
            usuario: Ideia.user_id
        })
        return (res.json( idea ));
    },
    //altera no banco de dados uma ideia a partir do seu ID
    async update(req,res)
    {
        const antigaIdeia = await Idea.findById(req.get("idea_id"));
        if (!antigaIdeia)
        {
            return (res.status(400).json({error: "Ideia não existe"}));
        }
        let title="";
        let description="";
        if (req.body.titulo === undefined && antigaIdeia.titulo !== null)
        {
            title = antigaIdeia.titulo;
        }
        else if (req.body.titulo !== "" && req.body.titulo !== undefined)
        {
            title = req.body.titulo;
        }
        if (req.body.descricao === undefined && antigaIdeia.descricao !== null)
        {
            description = antigaIdeia.descricao;
        }
        else if (req.body.descricao !== "" && req.body.descricao !== undefined)
        {
            description = req.body.descricao;
        }
        const novaIdeia = {
            title,
            description,
            user: antigaIdeia.usuario
        }
        const newIdea = await Idea.findByIdAndUpdate(req.headers.idea_id,{
           titulo: novaIdeia.title,
           descricao: novaIdeia.description,
           usuario: novaIdeia.user
        })
        return (res.json( newIdea ))
    },
    //remove uma ideia do banco de dados a partir do seu ID
    async destroy(req,res)
    {
        let removeIdea = await Idea.findById(req.get("idea_id"));
        if (!removeIdea)
        {
            return (res.status(400).json({error: "Ideia não existe"}));
        }
        removeIdea = await Idea.findByIdAndRemove(req.get("idea_id"));
        return (res.json( removeIdea ));
    }
};