//Require Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Global Variable
const str_validation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;

//Load Firestore CRUD Module
const DBReg = require('../Firestore_CRUD_Module/CRUD').DBReg;
const DBRegAdd = require('../Firestore_CRUD_Module/CRUD').DBRegAdd;

//GET Request Handling
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.get('/current', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/current.html'));
});

//Register POST Route
router.post('/register', (req, res) => {
  //Setup error array for password length and password confirmation
  let errors = [];
  //Confirm the entered password
  if (req.body.password != req.body.password2) {
    errors.push({ Text: 'Password Do Not Match' });
    console.log('Password Do Not Match');
  }
  //Check for password length
  let passvalid = req.body.password;
  let match_pattern = passvalid.match(str_validation);
  if (!match_pattern) {
    errors.push({
      Text:
        'Password Must be At Least 8 Chraters Long and Contain At Least 1 Upper Case, 1 Lower Case, and 1 Special Charater!'
    });
    console.log('Password Not Valid!');
  }
  //Warn for above erros
  if (errors.length > 0) {
    res.render('/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
    console.log('Overall Error!');
  } else {
    //Setup an array for duplicate emails
    const dp = [];
    //Query duplicate emails from Firestore
    DBReg.where('email', '==', req.body.email)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //Push queries into the array
          dp.push(doc.data().email);
        });
        if (dp.length > 0) {
          //If the length of the duplicate array > 0
          //Warn for duplicate email
          //Redirect user back to the registration page
          console.log(dp[0]);
          console.log('Duplicate Email');
          res.redirect('register');
        } else {
          //Firestore Schema for the Registration Collection
          const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            Date: Date.now()
          };
          //Hash the password
          bcrypt.genSalt(11, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              //Set the newUser object's password field to the hashed password
              newUser.password = hash;
              //Store the result to Firestore
              DBRegAdd.set(newUser)
                .then(result => {
                  res.redirect('login');
                  console.log('Success!');
                })
                .catch(err => {
                  console.log('Server Error:' + err);
                  return;
                });
            });
          });
        }
      })
      .catch(err => {
        console.log('Error Getting Document:', err);
      });
  }
});

//Login POST Route | Passport Local Strategy --> passport.js
router.post('/login', (req, res, next) => {});

//Export Module
module.exports = router;
