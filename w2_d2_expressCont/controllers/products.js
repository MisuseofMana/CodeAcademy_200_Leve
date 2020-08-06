const products = require("../data/products.js")

let list = (req, res) => {
    res.json(products)
}

let show = (req, res) => {
    res.json(products.find(element => element._id == req.params.id))
}

let create = (req, res) => {
    let counter = products.length;
    counter++;
    req.body["_id"] = counter;
    req.body["postId"] = 1;
    products.push(req.body)
}

module.exports = { list, create, show }