var http = require('http');
    
var server = http.createServer(function(req, res) {

    var cat = req.url;

    if (cat == "/portateis"){
        res.end('Categoria de Portateis');
    }else if(cat == "/smartphones") {
        res.end('Categoria de Smartphones');
    }else if(cat == "/tablets") {
        res.end('Categoria de tablets');
    }else {
        res.end("Loja de Tecnologia")
    }
}).listen(8080);