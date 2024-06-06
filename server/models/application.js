const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectID,
        ref: 'Job',
        required: true
    },
    seekerID: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true
    },
    resume: {
        type: String,
        requied: true
    },
    coverLetter: {
        type: String,
        required: true
    },
    status: {
        type: String,
        requied: true
    },
    createdAt:{
        type: String,
        required: true
    }
});

const application = model('application', applicationSchema);

module.exports = application;
