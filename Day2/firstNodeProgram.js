var http = require('http');

http.createServer(function (req, res) {
  console.log('hello my first node program')  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello SAUD');
}).listen(8080);