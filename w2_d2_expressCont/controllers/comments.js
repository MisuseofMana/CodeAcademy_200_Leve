const comments = require("../data/comments.js")

let list = (req, res) => {
    res.json(comments)
}

let show = (req, res) => {
    res.json(comments.find(element => element._id == req.params.id))
}

let create = (req, res) => {
    let counter = comments.length;
    counter++;
    req.body["_id"] = counter;
    req.body["postId"] = 1;
    comments.push(req.body)
}

module.exports = { list, create, show }