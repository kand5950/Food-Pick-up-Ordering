const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Users Cart page');
}); 

module.exports = router;
