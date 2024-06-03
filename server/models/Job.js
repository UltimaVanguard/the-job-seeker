const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  employerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  salaryRange: {
    type: String,
    required: true
  },
  experienceLevel: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Job', jobSchema);
