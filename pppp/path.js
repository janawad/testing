var http =require('http');
var url = require('url');
var path = require('path');

http.createServer(function(req,res){
	var uri = url.parse(req.url).pathname;
	console.log(uri);
console.log(process.cwd());
console.log(__dirname);
}).listen(8000);
console.log("8000 server is runing")
