const Billing = require("./modal");
// const jwt = require("jsonwebtoken");

exports.create = (req, res) =>{
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    Billing.create(req.body).then((users) =>{
        res.send(users);
        console.log("users", users);
    }).catch((err) =>{
        res.status(500).send({
            message: err.message || "something went wrong"
        });
    })
};

exports.findBill = (req, res) =>{
    const id = req.params.id;
    Billing.find(id).then((users) =>{
        res.send(users);
    }).catch((err) =>{
        res.status(500).send({
            message: err.message || "something went wrong"
        });
    })
};