module.exports = (app) => {
    const student = require('../controllers/student.controller.js');
    const response = require('../controllers/response.controller.js');
    const enquiry = require('../controllers/enquiry.controller.js');
    const user = require('../controllers/user.controller.js');

    const router = require('express').Router();

    router.post("/addStudent", student.create);
    router.get("/getAllStudents", student.findAll);
    router.get("/getStudent/:id", student.findOne);

    router.post("/addResponse", response.create);
    router.get("/getAllResponses", response.findAll );

    router.post("/addEnquiry", enquiry.create);
    router.get("/getAllEnquiries", enquiry.findAll);

    router.post("/addUser", user.register);

    app.use("/api/yoga", router);
}