// importar o pacote do express para o js
const express = require("express");

//criar uma instancia de express na variavel app
const app = express();

//definir uma porta do server ex: 5000
const PORT = 5000;

//testar a api com a func listen
app.listen(PORT, () => console.log(`Running at the port ${PORT}`))



