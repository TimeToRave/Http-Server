function route(handle, pathname, response) {
    console.log("route method at: " + pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.error("No handlers for " + pathname);
    }
}

exports.route = route;
