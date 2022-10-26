const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const ordershelper = require('../db/queries/orders')



let order;

router.get('/', (req, res) => {
  const templateVars = {};
  const user_id = req.session.user_id
  order['customers_id'] = user_id
  ordershelper.getOrder(user_id).then(order => {
    templateVars["order"] = order;
    res.render('user_confirmation', templateVars)
  })

});

router.post('/', (req, res) => {
  order = req.body;
  
})





module.exports = router;
