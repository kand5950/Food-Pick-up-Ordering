const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  res.render('user_login');
});
router.post('/', (req, res) => {
  // get email from form
  const email = req.body.email
  console.log(email);
  // find user id
  db.query(`SELECT * FROM users WHERE email = $1`, [email])
  .then((rows) => {
    const user = rows.rows[0]
     // set cookie
    req.session.user_id = user.id
    console.log(req.session.user_id)
    res.redirect('index');
  })
  .catch((err) => console.log(err))
});

module.exports = router;
