var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname;

        route(handle, path);

        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Hello World");
        response.end();
    }

    var server = http.createServer(onRequest);
    server.listen(8888);

    console.log("Server started");
}

exports.start = start;