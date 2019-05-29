var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var climbSchema = new mongoose.Schema({
    rating: {
      type: String,
      enum: ['V0', 'V1', 'V2', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8'],
      default: 'V0',
    },
    location: String,
    stats: String,
    date: {
      type: Date, 
      default: function() {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      },
  },
    comment: [commentSchema]
  });


module.exports = mongoose.model('Climb', climbSchema);