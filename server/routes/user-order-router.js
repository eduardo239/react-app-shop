const express = require('express');

const UserOrder = require('./user-order-controller');

const router = express.Router();

router.post('/order/add', UserOrder.userOrderAddItem);
router.delete('/order/delete/:itemId', UserOrder.userOrderDeleteItem);
router.get('/order/all/:userId', UserOrder.userOrderGetAllItems);

module.exports = router;
