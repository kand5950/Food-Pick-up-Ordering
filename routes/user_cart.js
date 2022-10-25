const express = require('express');
const router  = express.Router();
const ordersHelper = require('../db/queries/orders')

console.log(ordersHelper)

router.get('/', (req, res) => {
  const templateVars = {};
  ordersHelper.getOrders().then(orders => {
    templateVars["order"] = orders;
    console.log(templateVars);
  res.render('user_cart', templateVars);
}); 
});



module.exports = router;
