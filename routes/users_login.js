const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Login page user/admin');
}); 

module.exports = router;