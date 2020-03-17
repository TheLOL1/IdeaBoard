//index, show, store, update, destroy
const User = require("../models/User"); //Define user que está em models

/**
 * Define o método de armazenar e retornar da API da parte de Usuarios.
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
        return (res.json(user));
    }
};