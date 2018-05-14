//Require Dependencies
const LocalStrategy = require('passport-local').Strategy;
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
//Global Variable
const db = admin.firestore();
const DBRegRef = db.collection('Registration');

//Export Module
module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' }, //Specified the fields if they are different from the default
      (email, password, done) => {
        //console.log(email);
        let email_match = []; //Setup array for email
        const doc_id = []; //Setup array for document id -> use const cuz it will be used later on
        DBRegRef.where('email', '==', email) //Promise to check if the user exist by email
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              email_match.push(doc.data().email); //If the user is found by email, push it into the email arry
              doc_id.push(doc.id); //Push the doc id into the doc id array
            });
            if (email_match.length == 0) {
              //If the length of email array = 0
              console.log('No User Found');
            } else {
              //console.log(doc_id[0]);
              let password_match = []; //Setup array for password
              DBRegRef.where(
                admin.firestore.FieldPath.documentId(),
                '==',
                doc_id[0] //arrray starts from 0
              ) //Query password of the match user using doc id
                .get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    password_match.push(doc.data().password); //Push the hashsed pass into the match pass array
                  });
                  bcrypt.compare(
                    //Compare the DB result from the user input
                    password,
                    password_match[0],
                    (err, isMatch) => {
                      if (err) throw err; //Error Handling
                      if (isMatch) {
                        console.log('Loing Success'); //Password Match case
                      } else {
                        console.log('Login Failed'); //Password Mismatch case
                      }
                    }
                  );
                });
              //Session Serialization

              passport.serializeUser(function(user, done) {
                console.log('asd');
                done(null, user.id);
              });

              passport.deserializeUser(function(id, done) {
                User.findById(id, function(err, user) {
                  done(err, user);
                });
              });
            }
          });
      }
    )
  );
};
