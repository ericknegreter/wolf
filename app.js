//console.log('Hola Mundo!', 'Fuck yeah!');

//var nombre = "Erick";
//var nick = "erickn";

//console.log(nombre, 'es', nick);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})