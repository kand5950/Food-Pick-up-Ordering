// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express        = require('express');
const morgan         = require('morgan');
const cookieSession  = require('cookie-session');
const bodyParser     = require('body-parser');

const PORT           = process.env.PORT || 8080;
const app            = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: "session",
  keys: ["id"]
})
);
app.use(bodyParser.urlencoded({ extended: true }));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userCartRoutes = require('./routes/user_cart');
const userConfirmationRoutes = require('./routes/user_confirmation');
const restuarantsRoutes = require('./routes/restuarants')
const usersRoutes = require('./routes/users');
const usersLoginRoutes = require('./routes/users_login');
const usersLogoutRoutes = require('./routes/users_logout');
const homepageRoutes = require('./routes/homepage');
const adminLoginRoutes = require('./routes/admin_login');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/user_cart', userCartRoutes);
app.use('/user_confirmation', userConfirmationRoutes);
app.use('/restuarants', restuarantsRoutes);
app.use('/users', usersRoutes);
app.use('/users_login', usersLoginRoutes);
app.use('/users_logout', usersLogoutRoutes);
app.use('/homepage', homepageRoutes)
app.use('/admin_login', adminLoginRoutes);
app.use('/', homepageRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
