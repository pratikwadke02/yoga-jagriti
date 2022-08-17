module.exports = (app) => {
    const student = require('../controllers/student.controller.js');
    const response = require('../controllers/response.controller.js');
    const enquiry = require('../controllers/enquiry.controller.js');

    const router = require('express').Router();

    router.post("/addStudent", student.create);
    router.get("/getAllStudents", student.findAll);
    router.get("/getStudent/:id", student.findOne);

    router.post("/addResponse", response.create);

    router.post("/addEnquiry", enquiry.create);

    app.use("/api/yoga", router);
}