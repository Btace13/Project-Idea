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
const DBUserRef = db.doc("Users/mxODr4YotcynEkww1cNP");
const DBRegRef = db.doc("Registration/XAquhdMPtjnsFicoXvjp");

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
server.set("views", path.join(__dirname, "public"));

//Load Routes
const api_user = require("./routes/user");
const profile = require("./routes/profile");
const post = require("./routes/post");
const posts = require("./routes/posts");

//Landing Page
server.get("/", (req, res) => {
  res.send("Yo:" + Date.now());
});

//Use Routes
server.use("/api/user", api_user);
server.use("/api/profile", profile);
server.use("/api/post", post);
server.use("/api/posts", posts);

//GET Error Handling
server.get("*", (req, res) => {
  res.send("Page Not Found!");
});

//POST Error Handling
server.post("*", (req, res) => {
  res.send("Internal Error!");
});

//Server Starts
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
