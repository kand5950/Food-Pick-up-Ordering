const express = require('express');
const router  = express.Router();
const itemsHelper = require('../db/queries/menus')

// console.log(itemsHelper)

router.get('/', (req, res) => {
  console.log(req.session.user_id)
  const templateVars = {};
  itemsHelper.getItems().then(items => {
    templateVars["menu"] = items;
  res.render('user_menu', templateVars);
})
})



module.exports = router;
