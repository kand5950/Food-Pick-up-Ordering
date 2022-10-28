const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const ordershelper = require('../db/queries/orders')
const twilio = require("../twilio.js");


let order;

router.get('/', (req, res) => {
  console.log("on get")
  const templateVars = {};
  const user_id = req.session.user_id
  order['customer'] = user_id
  ordershelper.getOrder(user_id).then(order => {
    console.log(order)
    templateVars["order"] = order;
    res.render('user_confirmation', templateVars)
  })

});


router.post('/', (req, res) => {

  console.log(req.body, "got here")
  order = {user_id: req.session.user_id, order_food: req.body.foods_ordered.map(function(foods) { return foods["name"]}).join(", "), total_price: req.body.total, estimated_time: req.body.estTime}
  ordershelper.createOrder(order).then(order => {
    twilio.adminMessage();
    return res.send('success');
  }).catch(error => error);
  // console.log(order.foods_ordered.map(function(foods) { return foods["name"]}).join(", ")) gets food from order


})





module.exports = router;
