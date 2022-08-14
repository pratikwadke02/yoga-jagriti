module.exports = (app) => {
    const student = require('../controllers/student.controller.js');
    const response = require('../controllers/response.controller.js');

    const router = require('express').Router();

    router.post("/addStudent", student.create);
    router.post("/addResponse", response.create);

    app.use("/api/yoga", router);
}