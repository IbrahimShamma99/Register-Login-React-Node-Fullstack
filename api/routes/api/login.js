const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let User = require('../../schema/User');
let RouteNames = require("../../constants/constants");

//SECTION Login Router
router.route(RouteNames.login).post(function(req, res) {
    User.findOne({ user_name: req.body.user_name })
        .then(user => {
            console.log("User from login", user)
            if (!user) res.sendStatus(204);
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
});


module.exports = router;