const express = require('express');
const router  = express.Router();
const itemsHelper = require('../db/queries/menus')

console.log(itemsHelper)

router.get('/', (req, res) => {
  itemsHelper.getItem(1).then(items => {
    console.log(items);
  res.render('user_menu', {items});
})
})



module.exports = router;
