const Billing = require("./modal");

exports.create = async (req, res, next) =>{
    try{
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "content can not be empty"
            });
        }
        const invoiceId = (Math.random() + 1).toString(36).substring(7);
        req.body.invoiceId = invoiceId;
        await Billing.create(req.body).then((users) =>{
            res.status(200).send(users);
        }).catch((err) =>{
            res.status(400).send({
                message: err.message || "something went wrong"
            });
        })
    } catch (e) {
        next(e);
    }
};
exports.updateBillDetails = async (req, res, next) =>{
    try{
        const { id } = req.params.id;
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "content can not be empty"
            });
        }
        await Billing.findByIdAndUpdate({_id: id}, req.body, {new: true}).then((users) =>{
            res.status(201).send(users);
        }).catch((err) =>{
            res.status(400).send({
                message: err.message || "something went wrong"
            });
        })
    } catch (e) {
        next(e);
    }
};

exports.findBill = async (req, res, next) =>{
    try{
        const id = req.params.id;
        await Billing.findOne({_id: id}).then((users) =>{
            res.status(200).send(users);
        }).catch((err) =>{
            res.status(400).send({
                message: err.message || "something went wrong"
            });
        })
    } catch (e) {
        next(e)
    }

};

exports.getAllBillDetails = async (req, res, next) =>{
    try{
        const { skip=0, limit =0 } = req.body;
        await Billing.find({}).skip(skip).limit(limit).then((users) =>{
            res.status(200).send(users);
        }).catch((err) =>{
            res.status(400).send({
                message: err.message || "something went wrong"
            });
        })
    } catch (e) {
        next(e)
    }

};