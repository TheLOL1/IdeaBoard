const express = require("express"); //define o express dos modulos do node
const mongoose = require("mongoose"); //define o mongoose dos modulos do MongoDB

const app = express(); //inicializa o express

/**
 * Realiza a conexão no MongoDB.
 */

mongoose.connect("mongodb+srv://ideaboard:ideaboard@cluster0-9hbfc.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

/**
 *  Define para o express utilizar JSON. 
 */

app.use(express.json());

/**
 * Realiza o request no Routes que retorna os metodos da API para Ideia e Usúario.
 */

app.use(require("./Routes"));

/**
 * Define a porta 3333 pro navegador.
 */

app.listen(3333);
