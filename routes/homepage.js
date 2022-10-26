const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('index',{ user: user_id[req.session.user_id]});
});

module.exports = router;
