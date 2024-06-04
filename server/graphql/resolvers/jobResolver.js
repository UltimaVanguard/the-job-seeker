const Job = require('../../models/Job');
const Application = require('../../models/Application');

const jobResolver = {
  Job: {
    applications: async (parent) => {
      return await Application.find({ jobId: parent.id });
    }
  },
  Query: {
    getJobPosting: async (_, { id }) => {
      try {
        return await Job.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    createJobPosting: async (_, { employerId, title, description, location, jobType, salaryRange, experienceLevel }) => {
      try {
        const newJob = new Job({
          employerId,
          title,
          description,
          location,
          jobType,
          salaryRange,
          experienceLevel,
          createdAt: new Date().toISOString(),
        });
        await newJob.save();
        return newJob;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

module.exports = jobResolver;
