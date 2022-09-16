const db = require('../models');
const Billing = db.billing;

exports.create = async (req, res) => {
    try{
        Billing.create(req.body).then(data => {
            res.send(
                {
                    message: "Messege Sent successfully",
                }
            );
        }).catch(err => {
            res.send(err);
            console.log(err);
        });
    }catch(error){
        console.log(error);
    }
}