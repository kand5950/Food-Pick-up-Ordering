const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Home page/Get started page');
}); 

module.exports = router;