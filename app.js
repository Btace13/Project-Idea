//Require Dependencres
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");

//Global Variabres
const serviceAccount = require("./serviceAccountKey.json");

//Initalize Firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://idea-98945.firebaseio.com"
});

//Initialize Firestore
const db = admin.firestore();
const DBPostRef = db.collection("Posts").doc("nJn8zqA1UG4jkZPlulg3");
//or// const DBRef = db.doc("Posts/nJn8zqA1UG4jkZPlulg3");
const DBUserRef = db.doc("Users/MGOZMAJrdrDRDKk17zSQ");

//Initialize Express
const server = express();

//Initialize bodyParser
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//server.use(bodyParser.json());

//Setup Stactic Path
server.use(express.static(path.join(__dirname, "public")));

///HTTP GET Request Handling / Routing
//Open Route
server.get("/", (req, res) => {
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
      console.log("DB Error!"); //Error Handling
    }
  });
});

server.get("/api/user/login", (req, res) => {
  //Retrieve User Related Info.
  DBUserRef.get().then(doc => {
    if (doc && doc.exists) {
      let raw = doc.data();
      let sraw = JSON.stringify(raw);
      let info = JSON.parse(sraw);
      console.log(info);
      res.send(info);
    } else {
      consoel.log("DB Error!");
    }
  });
});

//Protected Route (Not Done Yet)
server.get("/api/user/current", (req, res) => {
  res.send("current");
});

server.get("/api/profile", (req, res) => {
  res.send("profile");
});

server.get("/api/profile/all", (req, res) => {
  res.send("profile all");
});

server.get("/api/profile/handle/:handle", (req, res) => {
  res.send("profile handle :handle");
});

server.get("/api/profile/user/:user_id", (req, res) => {
  res.send("user user_id");
});

server.get("/api/post/all", (req, res) => {
  res.send("post all");
});

server.get("/api/post/:post_id", (req, res) => {
  res.send("post :post_id");
});

//Error Handling
server.get("*", (req, res) => {
  res.send("Page Not Found!");
});
// server.get("*", function(req, res, next) {
//   let err = new Error();
//   err.status = 404;
//   next(err);
// });

// server.use(function(err, req, res, next) {
//   if (err.status !== 404) {
//     return next();
//   }
//   res.send("Page Not Found!");
// });

///HTTP POST Request Handling / Routing
server.post("/api/user/register", (req, res) => {
  console.log("Post Done!");
});

server.post("/api/post", (req, res) => {
  console.log("Post Done!");
  console.log(req.body);
});

server.post("/api/post/like/:post_id", (req, res) => {
  console.log("Post Done!");
});

server.post("/api/post/unlike/:post_id", (req, res) => {
  console.log("Post Done!");
});

server.post("/api/profile", (req, res) => {
  console.log("Post Done!");
});

//Error Handling
server.post("*", (req, res) => {
  res.send("Internal Error!");
});

//Server Starts
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
