const express = require('express');
const router  = express.Router();
const itemsHelper = require('../db/queries/menus')

console.log(itemsHelper)

router.get('/', (req, res) => {
  res.render('user_menu');
}); 

module.exports = router;
