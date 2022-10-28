const express = require('express');
const router  = express.Router();
const ordershelper = require('../db/queries/orders')
const twilio = require("../twilio.js");

let order;

router.get('/', (req, res) => {
  const templateVars = {};
  const user_id = req.session.user_id
 console.log(req.session.user_id)
  ordershelper.getOrder(user_id).then(order => {
    console.log(order)
    templateVars["order"] = order;
    res.render('admin_portal', templateVars)
  })

});


router.post('/', (req, res) => {
  console.log(Number(req.session.user_id))
  console.log(req.body)
  order = {user_id: req.session.user_id, order_food: req.body.foods_ordered.map(function(foods) { return foods["name"]}).join(", "), total_price: req.body.total, estimated_time: req.body.total}
  ordershelper.createOrder(order).then(order => {
    console.log(order)
  })
  // console.log(order.foods_ordered.map(function(foods) { return foods["name"]}).join(", ")) gets food from order
})

router.post('/update', (req, res) => {
  ordershelper.acceptedOrder(req.body.estTime).then(newEstTime => {
    twilio.customerMessage(req.body.estTime);
  })
})
module.exports = router;
