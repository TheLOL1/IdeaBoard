const mongoose = require("mongoose"); //define o mongoose dos modulos do MongoDB

/**
 * Define as colunas (titulo, descricao, usuario, data de criacao e data de alteração) da tabela que irá armazenar as ideias.
 */

const IdeaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'  
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Idea",IdeaSchema); //exporta o model da tabela Idea