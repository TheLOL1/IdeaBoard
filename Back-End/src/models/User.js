const mongoose = require("mongoose"); //define o mongoose dos modulos do MongoDB

/**
 * Define as colunas (nome, email, data de criação e data de alteração) da tabela que irá armazenar os usuarios.
 */

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("User",UserSchema); //exporta o model da tabela User