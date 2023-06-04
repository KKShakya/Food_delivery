const express = require('express');
const {
  getResaturantList,
  getResaturant,
  getResaturantMenu,
  addResaturantMenu,
  deleteResaturantMenu
} = require('../controllers/restaurantController');
const isAuthenticated = require('../middlewares/auth');


const router = express.Router();

router.get('/', getResaturantList);
router.get('/:id', getResaturant);
router.route('/:id/menu').get(getResaturantMenu).post(addResaturantMenu);
router.route('/:id/menu/:id').get(deleteResaturantMenu)


module.exports = router;