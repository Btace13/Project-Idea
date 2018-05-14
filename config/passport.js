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
                    //console.log(doc.data().password);
                    password_match.push(doc.data().password);
                  });
                  bcrypt.compare(
                    password,
                    password_match[0],
                    (err, isMatch) => {
                      if (err) throw err;
                      if (isMatch) {
                        console.log('In');
                      } else {
                        console.log('f');
                      }
                    }
                  );
                });
            }
          });
      }
    )
  );
};
