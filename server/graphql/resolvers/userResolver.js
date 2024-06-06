const User = require('../../models/User');
const Job = require('../../models/Job');
const Application = require('../../models/application');
const CompanyProfile = require('../../models/CompanyProfile');
const Review = require('../../models/Review');

const userResolver = {
  User: {
    profile: async (parent) => {
      // Determine if user is a job seeker or employer
      if (parent.role === 'JOB_SEEKER') {
        const jobSeekerProfile = await JobSeekerProfile.findOne({ userId: parent.id });
        return { seekerProfile: jobSeekerProfile };
      } else if (parent.role === 'EMPLOYER') {
        const employerProfile = await EmployerProfile.findOne({ userId: parent.id });
        return { employerProfile };
      }
      return null;
    }
  },
  Query: {
    getUser: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    createUser: async (_, { username, email, password, role }) => {
      try {
        const newUser = new User({
          username,
          email,
          password,
          role,
        });
        await newUser.save();
        return newUser;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

module.exports = userResolver;
