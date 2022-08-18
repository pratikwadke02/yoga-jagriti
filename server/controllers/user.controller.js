const db = require('../models');
const User = db.user;

exports.register = async (req, res) => {
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

exports.login = async (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        }
    }).then(data => {
        if (data) {
            res.send(
                {
                    message: "User found",
                    data: data,
                }
            );
        } else if (!data) {
            res.send(
                {
                    message: "Invalid credentials",
                }
            );
        }
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}
