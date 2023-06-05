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
router.route('/:id/menu').get(getResaturantMenu).post(isAuthenticated,addResaturantMenu);
router.route('/:id/menu/:menu_id').delete(isAuthenticated,deleteResaturantMenu)


module.exports = router;