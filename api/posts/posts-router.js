const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("/", (req, res) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "The posts information could not be retrieved" });
    });
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "The post information could not be retrieved" });
    });
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
