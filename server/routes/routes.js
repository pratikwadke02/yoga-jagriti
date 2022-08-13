module.exports = (app) => {
    const student = require('../controllers/student.controller.js');
    const router = require('express').Router();
    router.post("/addStudent", student.create);
    app.use("/api/student", router);
}