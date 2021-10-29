const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//get all users
router.get('/', userController.get_user);
//get specific user
router.get('/:id', userController.getUser)
//add user
router.post('/add', userController.addUser);
//update user
router.put('/:id', userController.updateUser)

//delete user
router.delete('/:id', userController.deleteUser)
module.exports = router;