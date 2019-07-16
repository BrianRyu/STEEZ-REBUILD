const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
 likes: {
  type: Number,
  trim: true,  
  required: true,
 },
 title: {
  type: String,
  trim: true,
  required: true
 },
 img_url: {
     type: String,
     trim: true,
     required: true
 },
 description: {
     type: String,
     trim: true,
     required: true
 }
});
module.exports = mongoose.model('Post', PostSchema)