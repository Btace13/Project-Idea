const express = require("express");
const router = express.Router();

//GET Request Handling
router.get("/:post_id", (req, res) => {
  res.send("post :post_id");
});

//POST Request Handling
router.post("/", (req, res) => {
  console.log("Post Done!");
  console.log(req.body);
});

router.post("/like/:post_id", (req, res) => {
  console.log("Post Done!");
});

router.post("/unlike/:post_id", (req, res) => {
  console.log("Post Done!");
});

//DELETE Request Handling
router.delete("/:post_id", (req, res) => {
  console.log("Delete success!");
});

//Export Module
module.exports = router;
