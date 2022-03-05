require('dotenv').config();
const Users = require('./modal');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//login data
const login = async (req, res, next) => {
    try{
        const result = await Users.findOne({email: req.body.email});
        const data = JSON.parse(JSON.stringify(result));
        if (data){
            const isMatch = bcrypt.compareSync(req.body.password, data.password);
            if (isMatch) {
                const token = jwt.sign({email: req.body.email}, process.env.SUPER_SECRET);
                return res.status(200).send({auth:true, token:token, email: data.email, role: data.role });
            } else {
                return res.status(404).send({auth: false, message: "Not valid details"});
            }
        } else {
            res.status(400).send({
                message: "Some error occurred while retrieving login."
            });
        }
    } catch (e) {
        next(e)
    }
};

module.exports= { login };