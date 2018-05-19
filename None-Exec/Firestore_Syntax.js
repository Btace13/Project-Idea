///Get a document from a collection

//Retrieve Post Related Info.
DBPostRef.get().then(doc => {
  if (doc && doc.exists) {
    // Check if the document exists in the DB
    let raw = doc.data(); //Set raw JSON tree object as raw
    let sraw = JSON.stringify(raw); //Stringify it and pass it to local var. sraw (semi-raw)
    let info = JSON.parse(sraw); //Parse the JSON strigified JSON response and pass it to local var. info
    console.log(info.Post.Looking_For); //Check for specific obeject in the document
    res.send(info); //Render the parsed stringified JSON response to the web page.
  } else {
    console.log('DB Error!'); //Error Handling
  }
});
//Retrieve User Related Info.
DBUserRef.get().then(doc => {
  if (doc && doc.exists) {
    let raw = doc.data();
    let sraw = JSON.stringify(raw);
    let info = JSON.parse(sraw);
    console.log(info);
    res.send(info);
  } else {
    console.log('DB Error!');
  }
});

//Retrieve User Registration Info.
DBRegRef.get().then(doc => {
  if (doc && doc.exists) {
    let raw = doc.data();
    let sraw = JSON.stringify(raw);
    let info = JSON.parse(sraw);
    console.log(info);
    res.send(info);
  } else {
    consoel.log('DB Error!');
  }
});

//Create a document with auto-generated ID and fill it in later
const DBRegRefGen = db.collection('Registration').doc();
DBRegRefGen.set(data);

//Retrieve specific documents that meet the condition
DBRegRef.where('email', '==', req.body.email)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error Occur When Checking Duplicate.!');
  });

// const db = admin.firestore();
// const DBPostRef = db.collection('Posts').doc('nJn8zqA1UG4jkZPlulg3');
//or// const DBRef = db.doc("Posts/nJn8zqA1UG4jkZPlulg3");
// const DBUserRef = db.doc('Users/mxODr4YotcynEkww1cNP');
// const DBRegRef = db.doc('Registration/XAquhdMPtjnsFicoXvjp');

//Test Texr
