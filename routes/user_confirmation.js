const express = require('express');
const router  = express.Router();
const ordershelper = require('../db/queries/orders')

console.log(ordershelper);

let order;
router.get('/', (req, res) => {
  const templateVars = {};
  ordershelper.getOrders().then(order => {
    templateVars["order"] = order;
    console.log(templateVars);
  res.render('user_confirmation', templateVars);
})
}); 

router.post('/', (req, res) => {
  res.send(req.body)
  console.log(req.body)
})





module.exports = router;
