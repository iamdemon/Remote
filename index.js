const http = require('http');
var server = http.createServer(function (req, res) {
  console.log('Url from client '+ req.url);
  res.writeHead(200);
  res.end('Hello Ak');
});

server.listen('3000', '127.1.0.1');
console.log('Server running on 3000');
