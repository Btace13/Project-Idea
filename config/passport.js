//Require Dependencies
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//Load Firestore CRUD Module
const DBReg = require('../Firestore_CRUD_Module/CRUD').DBReg;

//Export Module
module.exports = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' }, //Specified the fields if they are different from the default
      (email, password, done) => {
        //console.log(email);
        let email_match = []; //Setup array for email
        const doc_id = []; //Setup array for document id -> use const cuz it will be used later on
        DBReg.where('email', '==', email) //Promise to check if the user exist by email
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
              DBReg.doc(doc_id[0])
                .get()
                .then(doc => {
                  if (!doc.exists) {
                    console.log("Doc. Doesn't Exist");
                  } else {
                    password_match.push(doc.data().password);
                  }
                  //console.log(password_match[0]);
                  bcrypt.compare(
                    //Compare the DB result from the user input
                    password,
                    password_match[0],
                    (err, isMatch) => {
                      if (err) throw err; //Error Handling
                      if (isMatch) {
                        console.log('Good'); //Password Match case
                      } else {
                        console.log('Login Failed'); //Password Mismatch case
                      }
                    }
                  );
                })
                .catch(err => {
                  console.log('Error Getting Doc', err);
                });
            }
          });
      }
    )
  );
  //Session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  //Session
};
