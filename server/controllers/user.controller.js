const db = require('../models');
const User = db.user;

exports.create = async (req, res) => {
    console.log(req.body);
    if (req.body.password != req.body.confirmPassword) {
        res.send(
            {
                message: "Password and Confirm Password do not match",
            }
        );
    } else {   
        User.create(req.body).then(data => {
            res.send(
                {
                    message: "User created successfully",
                }
            );
        }).catch(err => {
            res.send(err);
            console.log(err);
        }
        );
    }
}