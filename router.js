function route(handle, pathname) {
    console.log("route method at: " + pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.error("No handlers for " + pathname);
    }
}

exports.route = route;