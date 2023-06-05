const express = require('express');
const { OrderFood, getOrder, updateOrderStatus } = require('../controllers/orderController');
const isAuthenticated = require('../middlewares/auth');


const router =  express.Router();

router.route('/').post(isAuthenticated,OrderFood);
router.route('/:id').get(getOrder).patch(updateOrderStatus);

module.exports =  router;