function start () {
    console.log("Start method handler");
}

function upload() {
    console.log("Upload method handler");
}

function nothing() {}

exports.start = start;
exports.upload = upload;
exports.nothing = nothing;