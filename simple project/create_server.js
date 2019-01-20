var http= require('http');
http.createServer(function(req,res){
	res.end("Hello new world");
	
}).listen(8080);
console.log("node js server is listning");