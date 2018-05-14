//Require Dependency
const admin = require('firebase-admin');
//Initialize
const db = admin.firestore();
const DBPostRef = db.collection('Posts').doc();
const DBUserRef = db.collection('Users').doc();

module.exports = {
  DBPOST: DBPostRef,
  USERPOST: DBUserRef
};
