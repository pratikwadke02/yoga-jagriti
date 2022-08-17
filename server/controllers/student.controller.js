const db = require('../models');
const Student = db.student;

exports.create = async (req, res) => {
    console.log(req.body);
    Student.create(req.body).then(data => {
        res.send(
            {
                message: "Student created successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Student.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}