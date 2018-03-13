var http = require('http');

var server = http.createServer(function(req,res){
	res.write("something");
	res.end()
}).listen(8000)