require('dotenv').config;
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const routerHomepage = require('./routes/homepage');
const routerLogin = require('./routes/login');
const routerSignup = require('./routes/signup');
const routerLogged = require('./routes/logged');


app.set('view engine', 'ejs');


// Middlewares
app.use(express.static(path.join(__dirname, 'views')));

app.use(routerHomepage);
app.use(routerLogin);
app.use(routerSignup);
app.use(routerLogged);


// Server configuration
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});