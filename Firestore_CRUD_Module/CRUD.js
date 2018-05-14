//Require Dependency
const admin = require('firebase-admin');
//Initialize Firestore
const db = admin.firestore();
const DBPostRef = db.collection('Posts').doc();
const DBUserRef = db.collection('Users').doc();
const DBRegRef = db.collection('Registration');
const DBRegRefGen = db.collection('Registration').doc();

module.exports = {
  DBPost: DBPostRef,
  DBUser: DBUserRef,
  DBReg: DBRegRef,
  DBRegAdd: DBRegRefGen
};

//Firestore Reference
//const DBPostRef = db.collection('Posts').doc('nJn8zqA1UG4jkZPlulg3');
//const DBUserRef = db.collection('Users'); //db.doc("Users/mxODr4YotcynEkww1cNP");
