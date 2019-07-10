const productModel = require("../models/products");

module.exports = {
  getById: function(req, res, next) {
    console.log(req.body);
    productModel.findById(req.params.productId, function(err, productInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "Success",
          message: "Product Found",
          data: { products: productInfo }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let productsList = [];
    productModel.find({}, function(err, products) {
      if (err) {
        next(err);
      } else {
        for (let product of products) {
          productsList.push({
            id: product._id,
            name: product.name,
            description: product.description,
            img_url: product.img_url
          });
        }
        res.json({
          status: "Success",
          message: "Products list found",
          data: { products: productsList }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    productModel.findByIdAndUpdate(
      req.params.productId,
      { name: req.body.name },
      function(err, productInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "Success",
            message: "Product updated successfully!",
            data: null
          });
        }
      }
    );
  },
  deleteById: function(req, res, next) {
    productModel.findByIdAndRemove(req.params.productId, function(
      err,
      productInfo
    ) {
      if (err) next(err);
      else {
        res.json({
          status: "Success",
          message: "Product deleted successfully",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    productModel.create(
      {
        name: product.name,
        description: product.description,
        img_url: product.img_url
      },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Product added successfully!!!",
            data: null
          });
      }
    );
  }
};
