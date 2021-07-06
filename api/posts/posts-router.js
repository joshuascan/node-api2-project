const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(req.method + "posts");
  console.log(req.method);
});

router.get("/:id", (req, res) => {
  res.status(200).json(req.method + "post");
  console.log(req.method);
});

router.post("/", (req, res) => {
  res.status(200).json(req.method + "new post");
  console.log(req.method);
});

router.put("/:id", (req, res) => {
  res.status(200).json(req.method + "post");
  console.log(req.method);
});

router.delete("/:id", (req, res) => {
  res.status(200).json(req.method + "post");
  console.log(req.method);
});

router.get("/:id/comments", (req, res) => {
  res.status(200).json(req.method + "comments");
  console.log(req.method);
});

module.exports = router;
