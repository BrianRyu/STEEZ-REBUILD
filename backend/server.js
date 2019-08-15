const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const products = require("./routes/products");
const users = require("./routes/users");
const posts = require("./routes/posts");

const app = express();
const port = process.env.PORT || 5000;

// jwt secret token
app.set("secretKey", "nodeRestApi"); 

// connection to mongodb
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection estabilished successfully`);
})
// public route
app.use("/users", users);
app.use("/products", products)
app.use("/posts", posts)



// private route
// app.use("/products", validateUser, products);


app.get("/favicon.ico", function(req, res) {
  res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(
    err,
    decoded
  ) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
}

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// handle errors
app.use(function(err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something looks wrong :( !!!" });
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})