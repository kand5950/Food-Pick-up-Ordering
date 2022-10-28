const express = require('express');
const router  = express.Router();

router.get('/users_logout', (req, res) => {
  res.redirect("/users_login");
});

module.exports = router;
