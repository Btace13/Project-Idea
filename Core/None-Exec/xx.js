let hash = [];
passport.serializeUser(function(email, done) {
  DBReg.where('email', '==', email)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        hash.push(doc.id);
        done(null, doc.id);
      });
      passport.deserializeUser(function(id, done) {
        DBReg.doc(hash[0])
          .get()
          .then(doc => {
            if (!doc.exists) {
              console.log('failed');
            } else {
              done(null, doc.data().name);
              console.log(doc.data().name);
            }
          })
          .catch(err => {
            console.log('err getting doc', err);
          });
      });
    });
});
