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

app.get('/frases', function (req, res) 
{
    res.send(search.getAll());
});

app.get('fraseid', function (req, res)
{
    res.send(search.findByID(req.query.id));
});
