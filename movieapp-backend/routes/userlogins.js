const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.post('/register', (req, res) => {
  let newUser = new User({

    id: req.body.id,
    username: req.body.username,
    password: hash

  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

router.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = hash;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, 'secretkey', {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {

            id: user._id,
            username: user.username,
            password: user.password,

          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
  res.json({user: req.user});
});

router.post('/logout', (req, res) => {
  // Invalidate the JWT
  res.json({ success: true, message: 'You have been logged out' });
});

module.exports = router;
