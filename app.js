//Require Dependencies
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");

//Global Variables
const serviceAccount = require("./serviceAccountKey.json");

//Initalize Firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://idea-98945.firebaseio.com"
});

//Setup Express
const server = express();

//Setup bodyParser
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Setup Stactic Path
server.use(express.static(path.join(__dirname, "public")));

//Setup Database
const db = admin.database();

//Server Starts
server.listen(3000, function() {
  console.log("Server is now listening on port 3000");
});
