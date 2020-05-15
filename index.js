var app = require('./app');
var http = require('http');

var port = process.env.PORT || '5432';
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log(`OK Computer - Running at ${port}`));