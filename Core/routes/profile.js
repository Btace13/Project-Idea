const express = require("express");
const router = express.Router();

//GET Request Handling
router.get("/", (req, res) => {
  res.send("profile");
});

router.get("/all", (req, res) => {
  res.send("profile all");
});

router.get("/handle/:handle", (req, res) => {
  res.send("profile handle :handle");
});

router.get("/user/:user_id", (req, res) => {
  res.send("user user_id");
});

//POST Request Handling
router.post("/", (req, res) => {
  console.log(req.body);
  console.log("Post Done!");
});

//DELETE Request Handling
router.delete("/", (req, res) => {
  console.log("Delete Success!");
});

//Export Module
module.exports = router;
