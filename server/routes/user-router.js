const express = require('express');

const UserController = require('./user-controller');

const router = express.Router();

router.post('/user/new', UserController.newUser);
router.get('/user/all', UserController.allUsers);
// router.get('/item/:id', ItemController.itemById);
router.delete('/user/delete/:id', UserController.deleteUser);
// router.put('/update/:id', ItemController.updateItem);

module.exports = router;
