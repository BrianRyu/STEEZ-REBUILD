const postModel = require("../models/posts");

module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    postModel.findById(req.params.postId, function(err, postInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "Success",
          message: "Post Found",
          data: { posts: postInfo }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let postsList = [];
    postModel.find({}, function(err, posts) {
      if (err) {
        next(err);
      } else {
        for (let post of posts) {
          postsList.push({
            id: post._id,
            likes: post.likes,
            title: post.title,
            description: post.description,
            img_url: post.img_url,
            products: post.products
          });
        }
        res.json({
          status: "Success",
          message: "Posts list found",
          data: { posts: postsList }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    postModel.findByIdAndUpdate(
      req.params.postId,
      { name: req.body.name },
      function(err, postInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "Success",
            message: "Post updated successfully!",
            data: null
          });
        }
      }
    );
  },
  deleteById: function(req, res, next) {
    postModel.findByIdAndRemove(req.params.postId, function(
      err,
      postInfo
    ) {
      if (err) next(err);
      else {
        res.json({
          status: "Success",
          message: "Post deleted successfully",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    postModel.create(
      {
        likes: req.body.likes,
        title: req.body.title,
        description: req.body.description,
        img_url: req.body.img_url,
        products: req.body.products
      },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "post added successfully!!!",
            data: null
          });
      }
    );
  }

};
