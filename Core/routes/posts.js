const express = require("express");
const router = express.Router();

//DELETE Request Handling
router.delete("/comment/:id", (req, res) => {
  console.log("Delete Success!");
});

router.delete("/comment/:id/:comment_id", (req, res) => {
  console.log("Delete Success!");
});

//Export Module
module.exports = router;
