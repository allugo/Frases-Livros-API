let search = require('./functions');
const express = require('express');

// Iniciando o app.
const app = express();

app.get('/', function(request, response) {
  console.log("OK Computer");
  response.send("OK Computer. AlluGo! - API de Frases by: Saulo Joab (saulojoabps@gmail.com) - 2019");
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Ok Computer. Port: ' + listener.address().port);
});

app.get('/books', function (req, res) 
{
    
});
