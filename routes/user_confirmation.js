const express = require('express');
const router  = express.Router();
const ordershelper = require('../db/queries/orders')

console.log(ordershelper);

let order;
router.get('/', (req, res) => {
  const templateVars = {};
  ordershelper.getOrders().then(order => {
    templateVars["Orders"] = order;
    console.log(templateVars);
  res.render('user_confirmation', templateVars);
})
}); 



module.exports = router;
