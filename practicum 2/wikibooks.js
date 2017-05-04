var http = require('http');


var app = express();

app.all('*', function(req, res, next){
	console.log(req.method + " " + req.url);
	next();
});

app.get('api/v1/hello', function(req, res, next){
	res.contentType('application/json');
	res.json({"msg" : "hello to you all !! have a nice day."});
});

app.listen(8080, function(){
	console.log('the magic happens at http://localhost:8080');
});