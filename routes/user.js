//Require Dependencies
const express = require("express");
const router = express.Router();
const path = require("path");
const admin = require("firebase-admin");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//Initialize Firestore
const db = admin.firestore();
//Firestore Reference
const DBPostRef = db.collection("Posts").doc("nJn8zqA1UG4jkZPlulg3");
const DBUserRef = db.collection("Users"); //db.doc("Users/mxODr4YotcynEkww1cNP");
const DBRegRef = db.collection("Registration");
const DBRegRefGen = db.collection("Registration").doc();

//GET Request Handling
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

//Protected Route (Not Done Yet)
router.get("/current", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/current.html"));
});

//POST Request Handling
router.post("/register", (req, res) => {
  //Setup error array for password length and password confirmation
  let errors = [];
  //Confirm the entered password
  if (req.body.password != req.body.password2) {
    errors.push({ Text: "Password Do Not Match" });
    console.log("Password Do Not Match");
  }
  //Check for password length
  if (req.body.password.length < 8) {
    errors.push({ Text: "Password Must Be At Least 8 Characters" });
    console.log("Password Too Short");
  }
  //Warn for above erros
  if (errors.length > 0) {
    res.render("/register", {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
    console.log("Overall Error!");
  } else {
    //Setup an array for duplicate emails
    const dp = [];
    //Query duplicate emails from Firestore
    DBRegRef.where("email", "==", req.body.email)
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
          console.log("Duplicate Email");
          res.redirect("register");
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
              DBRegRefGen.set(newUser)
                .then(result => {
                  res.redirect("login");
                  console.log("Success!");
                })
                .catch(err => {
                  console.log("Server Error:" + err);
                  return;
                });
            });
          });
        }
      });
  }
});

router.post("/login", (req, res) => {
  let errors = [];
});

//Export Module
module.exports = router;
