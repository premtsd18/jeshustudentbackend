const express = require('express');
const router = express.Router();
const ctrlStudent=require('../controllers/student.controller');
const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/postStudent',ctrlStudent.poststudent)
router.get('/getstudents',ctrlStudent.getstudents)
router.put('/deletestudent',ctrlStudent.deletestudent)
router.get('/getstudentdata/:id',ctrlStudent.getstudentdata)
router.put('/putStudent',ctrlStudent.putStudent)
module.exports = router;    

