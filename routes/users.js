var express = require('express');
var router = express.Router();
const userController = require('../controllers/users')

router.get('/', userController.getAllUser);
router.post('/add', userController.addUser);
router.post('/edit', userController.editUser);
router.delete('/delete/:id', userController.deleteUser);
router.post('/login', userController.loginUsers);

module.exports = router;
