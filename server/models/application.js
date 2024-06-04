const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('application', applicationSchema)
