var mod=require('./create_model2');
var http= require('http');
http.createServer(function(req,res){
	res.end("Hello world");
	
}).listen(8080);
console.log("node js server is listning");