var http = require("http");
var url = require("url");
var qs = require('querystring');

function start(route, handle) {
    function onRequest(request, response) {

        var body = '';
        var post;
        if (request.method == 'POST') {
            request.on('data', function (data) {
                body += data;
				
                if (body.length > 1e6)
                    request.connection.destroy();
            });

            request.on('end', function () {
                var post = qs.parse(body);
                console.log("body");
                console.log(body);
				
            });
        }


        var path = url.parse(request.url).pathname;

        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        route(handle, path, response);

        // response.write("100");
        // response.end();
    }

    var server = http.createServer(onRequest);
    server.listen(8888);

    console.log("Server started");
}

exports.start = start;
