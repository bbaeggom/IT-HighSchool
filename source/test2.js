var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':  'text/plain'});
	res.end('한글이 안될수도있어서 jungmin Homepage\n');
}).listen(8000, '127.0.0.1');

console.log('Server runnig at http://127.0.0.1:8000/');


