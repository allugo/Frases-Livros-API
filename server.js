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
    // Connecting to the database.
    db.getConnection(function (err, connection) 
    {
      // In case we find some error.
      if (err)
      {
         console.log(err);
         connection.release();
         return;
      }
    
      // Executing our query.
      connection.query('SELECT * FROM livro', function (error, results, fields) 
      {
        // In case we find some error.
        if (error)
        {
          console.log(error);
          connection.release();
          return;
        }

        res.send(results)
        connection.release();
      });
    });
});
