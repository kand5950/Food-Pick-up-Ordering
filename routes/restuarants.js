const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Restuarants page');
}); 

module.exports = router;