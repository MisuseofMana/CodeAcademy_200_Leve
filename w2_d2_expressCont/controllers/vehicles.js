const vehicles = require("../data/vehicles.js")

let list = (req, res) => {
    res.json(vehicles)
}

let show = (req, res) => {
    res.json(vehicles.find(element => element._id == req.params.id))
}

let create = (req, res) => {
    let counter = vehicles.length;
    counter++;
    req.body["_id"] = counter;
    req.body["postId"] = 1;
    vehicles.push(req.body)
}

module.exports = { list, create, show }