const User = require("../models/User"); //Define user que está em models

/**
 * Exporta o método de armazenar da API da parte de Usuarios.
 */

module.exports = {
    //Armazena um novo usúario no banco de dados se não ja estiver um usúario inserido com o mesmo e-mail
    async store(req,res){
        const usuario = {
            name: req.body.nome,
            email: req.body.email,
            password: req.body.senha
        }
        const userPesquisa = await User.findOne({email} = req.body);
        if (!userPesquisa)
        {
            const user = await User.create({
                nome: usuario.name,
                email: usuario.email,
                senha: usuario.password
            });
            return (res.json(user));
        }
        else
        {
            return (res.status(409).json({error: "Usuário já existe"}));
        }
    },
    //Pesquisa um usúario a partir do seu e-mail
    async show (req,res)
    {
        const usuario = await User.findOne({email} = req.body);
        return (res.json(usuario));
    }
};