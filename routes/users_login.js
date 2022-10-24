const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('user_login');
});
router.post('/login', (req, res) => {
  res.redirect('index');
});
module.exports = router;
