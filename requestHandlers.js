function start () {
    console.log("Start method handler");
}

function upload() {
    console.log("Upload method handler");
}

function CalculateDeliveryPrice(response) {
        response.write("120");
        response.end();
}

function nothing() {}

exports.start = start;
exports.upload = upload;
exports.nothing = nothing;
exports.CalculateDeliveryPrice = CalculateDeliveryPrice;
