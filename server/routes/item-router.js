const express = require('express');

const ItemController = require('./item-controller');

const router = express.Router();

router.post('/new', ItemController.createItem);
router.get('/all', ItemController.allItems);
router.get('/item/:id', ItemController.itemById);
router.delete('/item/:id', ItemController.deleteItem);
router.put('/update/:id', ItemController.updateItem);

module.exports = router;
