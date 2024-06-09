const { Schema, model } = require('mongoose');

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
  },
  applications: [
    {
      seekerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      fName: {
        type: String,
        required: true,
      },
      lName: {
        type: String,
        required: true
      }
    }
  ]
});

const Job = model('Job', jobSchema);

module.exports = Job;

