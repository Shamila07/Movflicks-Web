const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let User=require("../models/UserModel");

router.post('/add', function(req, res) {
  const { name,Username, email, password } = req.body;

  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        name,
        Username,
        email,
        password: hash
      });

      user.save(function(err, result) {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          res.status(201).json({
            message: 'User created successfully!'
          });
        }
      });
    }
  });
});

router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, 
    //{ Username: req.body.Username},
    function(err, user) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else if (!user) {
      return res.status(401).json({
        message: 'Authentication failed. User not found.'
      });
    } else {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed. Invalid password.'
          });
        } else if (result) {
          const token = jwt.sign({
            email: user.email,
            userId: user._id
          }, 'secretkey', {
            expiresIn: '1h'
          });

          return res.status(200).json({
            message: 'Authentication successful.',
            token: token
          });
        } else {
          return res.
          status(401).json({
            message: 'Authentication failed. Invalid password.'
            });
            }
          });
        }
      });
    });
            
module.exports = router;