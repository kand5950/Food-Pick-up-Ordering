const express = require('express');
const router  = express.Router();
const itemsHelper = require('../db/queries/menus')

// console.log(itemsHelper)

router.get('/', (req, res) => {
  const templateVars = {};
  itemsHelper.getItems().then(items => {
    templateVars["menu"] = items;
    console.log(templateVars);
  res.render('user_menu', templateVars);
})
})



module.exports = router;
