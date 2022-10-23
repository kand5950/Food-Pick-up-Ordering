const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Log-out page');
}); 

module.exports = router;
