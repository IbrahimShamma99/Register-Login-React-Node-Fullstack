const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../DB.js');
const registrationRoutes = require('../route');
var session = require('express-session');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("./schema/User", registrationRoutes);

app.use(session({
    secret: 'LoginPlugin',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
mongoose
    .connect(config.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

mongoose.set('debug', true);



module.exports = app;