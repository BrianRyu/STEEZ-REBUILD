//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/backend';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;