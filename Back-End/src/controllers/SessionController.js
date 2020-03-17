//index, show, store, update, destroy
const User = require("../models/User"); //Define user que está em models

/**
 * Exporta o método de armazenar da API da parte de Usuarios.
 */

module.exports = {
    async store(req,res){
        const usuario = {
            name: req.body.nome,
            email: req.body.email
        }
        let user = await User.findOne({email} = req.body);
        if (!user)
        {
            user = await User.create({
                nome: usuario.name,
                email: usuario.email
            })
        }
        else
        {
            return (res.status(409).json({error: "Usuário já existe"}));
        }
        return (res.json(user));
    }
};