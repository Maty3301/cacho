var http = require("http");

http.createServer(function (req: any, res: any) {
    res.write("I'm Alive");
    res.end();
}).listen(8080);
