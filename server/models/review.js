const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectID,
    ref: "User",
    required: true,
  },
  companyId: {
    type: Schema.types.ObjectID,
    ref: "User",
    required: true,
  },
  rating: {
    type: Int,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model ('review', reviewSchema)
