//resuire Dependencres
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

///HTTP GET Request Handling / Routing
//Open Route
server.get("/", function(res, res) {
  res.send("default");
});

server.get("/api/user/login", function(res, res) {
  res.send("login page");
});

//Protected Route
server.get("/api/user/current", function(res, res) {
  res.send("current");
});

server.get("/api/profile", function(res, res) {
  res.send("profile");
});

server.get("/api/profile/all", function(res, res) {
  res.send("profile all");
});

server.get("/api/profile/handle/:handle", function(res, res) {
  res.send("profile handle :handle");
});

server.get("/api/profile/user/:user_id", function(res, res) {
  res.send("user user_id");
});

server.get("/api/post/all", function(res, res) {
  res.send("post all");
});

server.get("/api/post/:post_id", function(res, res) {
  res.send("post :post_id");
});

//Error Handling
server.get("*", function(req, res) {
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
server.post("/api/user/register", function(req, res) {
  console.log("Post Done!");
});

server.post("/api/post", function(req, res) {
  console.log("Post Done!");
});

server.post("/api/post/like/:post_id", function(req, res) {
  console.log("Post Done!");
});

server.post("/api/post/unlike/:post_id", function(req, res) {
  console.log("Post Done!");
});

server.post("/api/profile", function(req, res) {
  console.log("Post Done!");
});

//Error Handling
server.post("*", function(req, res) {
  res.send("Internal Error!");
});

//Setup Firestore
const db = admin.firestore();

//Server Starts
server.listen(3000, function() {
  console.log("Server is now listening on port 3000");
});
