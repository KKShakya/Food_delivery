const express = require('express');
const { OrderFood, getOrder, updateOrderStatus } = require('../controllers/orderController');


const router =  express.Router();

router.route('/').post(OrderFood);
router.route('/:id').get(getOrder).patch(updateOrderStatus);

module.exports =  router;