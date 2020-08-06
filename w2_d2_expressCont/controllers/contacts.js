const contacts = require("../data/contacts.js")

let list = (req, res) => {
    res.json(contacts)
}

let show = (req, res) => {
    res.json(contacts.find(element => element._id == req.params.id))
}

let create = (req, res) => {
    let counter = contacts.length;
    counter++;
    req.body["_id"] = counter;
    req.body["postId"] = 1;
    contacts.push(req.body)
}

module.exports = { list, create, show }