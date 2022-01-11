var express = require('express');
var router = express.Router()
var middleware = require('../middlewares/test');
const userController = require('../controllers/userController');
// routes 
router.get('/', middleware.timeLog, userController.getAllUsers);
router.get('/:id', middleware.timeLog, userController.getUserById);
router.post('/', middleware.timeLog, userController.addUser);
router.put('/:id', middleware.timeLog, userController.updateUser);
router.delete('/:id', middleware.timeLog, userController.deleteUser);

// router.get('/getAll', userController.getUsers);
module.exports = router