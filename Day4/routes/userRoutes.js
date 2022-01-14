var express = require('express');
var router = express.Router()
var middleware = require('../middlewares/test');
const userController = require('../controllers/userController');
const userJobs = require('../jobs/emailJob')
// routes 
router.get('/', middleware.timeLog, userController.getAllUsers);
router.get('/', middleware.timeLog, userController.getUserById);
//get users with bank information using join
 router.get('/getUsersWithBankInfo', middleware.timeLog, userController.getUsersBankInformation);

router.post('/', middleware.timeLog, userController.addUser);
router.put('/:id', middleware.timeLog, userController.updateUser);
router.delete('/:id', middleware.timeLog, userController.deleteUser);
//send email after specfic time (CRON JOBS)
router.post('/sendEmail', userJobs.sendEmailToUser);

module.exports = router