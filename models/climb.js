var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var climbSchema = new mongoose.Schema({
    rating: Number,
    location: String,
    stats: String,
    comment: [commentSchema]
  });


module.exports = mongoose.model('Climb', climbSchema);