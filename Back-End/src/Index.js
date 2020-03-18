const express = require("express"); //define o express dos modulos do node
const cors = require("cors"); //define o cors dos seus modulos
const mongoose = require("mongoose"); //define o mongoose dos modulos do MongoDB

const app = express(); //inicializa o express
app.use(cors()); //utilizar as politicas cors

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

app.use(require("./routes"));

/**
 * Define a porta com a que o EvenNode utiliza.
 */

app.listen(process.env.PORT);
