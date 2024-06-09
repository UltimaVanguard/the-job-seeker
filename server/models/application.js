const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectID,
        ref: 'Job',
        required: true
    },
    seekerId: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    }
});

const application = model('application', applicationSchema);

module.exports = application;
