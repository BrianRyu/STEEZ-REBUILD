const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 description: {
  type: String,
  trim: true,
  required: true
 },
 img_url: {
     type: String,
     trim: true,
     required: true
 }
});
module.exports = mongoose.model('Product', ProductSchema)