const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const User = require('../modules/user');

routes.post('/', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'User exists with the provided email'
                });
            } else {
                const user = new User({
                    customerid: new mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber
                });

                user.save()
                    .then(savedUser => {
                        res.status(201).json({
                            message: 'User Created',
                            user: savedUser
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = routes;
