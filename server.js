var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname;

        route(path);

        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Hello World");
        response.end();
    }

    function route(path) {
        console.log("Request receved for " + path);
    }

    var server = http.createServer(onRequest);
    server.listen(8888);

    console.log("Server started");
}

exports.start = start;