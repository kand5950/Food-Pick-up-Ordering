const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Restuarants/Admin page');
}); 

module.exports = router;