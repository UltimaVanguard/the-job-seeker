const { Job, Application, User, Review, CompanyProfile } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getJobs: async () => {
      return Job.find();
    },
    getCompanyJobs: async (parent, { employerId }) => {
      return Job.find({ employerId: employerId});
    },
    getJobPosting: async (_, { id }) => {
      try {
        return await Job.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    },
    getReviewById: async (_, { id }) => {
      try {
        const review = await Review.findById(id);
        return review;
      } catch (error) {
        throw new Error(`Error fetching review: ${error}`);
      }
    },
    getReviewsByUser: async (_, { userId }) => {
      try {
        const reviews = await Review.find({ userId });
        return reviews;
      } catch (error) {
        throw new Error(`Error fetching reviews: ${error}`);
      }
    },
    getReviewsByCompany: async (_, { companyId }) => {
      try {
        const reviews = await Review.find({ companyId });
        return reviews;
      } catch (error) {
        throw new Error(`Error fetching reviews: ${error}`);
      }
    },
    getUser: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
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
    },
    createReview: async (_, { userId, companyId, rating, comment, createdAt }) => {
      try {
        const review = new Review({
          userId,
          companyId,
          rating,
          comment,
          createdAt,
        });
        const savedReview = await review.save();
        return savedReview;
      } catch (error) {
        throw new Error(`Error creating review: ${error}`);
      }
    },
    createUser: async (parent, { username, email, password, role }) => {
      try {
        const user = await User.create({
          username,
          email,
          password,
          role,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    createSeekerProfile: async (parent, { id, fName, lName, address, phone }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            seekerProfile: { fName, lName, address, phone },
          },
        },
        {
          new: true,
        }
      );
      return updatedUser;
    },
    createEmployerProfile: async (parent, { id, companyName, address, phone, email, industry }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            employerProfile: { companyName, address, phone, email, industry },
          },
        },
        {
          new: true,
        }
      );
      return updatedUser;
    },
    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          throw new Error("User not found");
        }
        return deletedUser;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteJobPosting: async (_, { id }) => {
      try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) {
          throw new Error("Job not found");
        }
        return deletedJob;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteApplication: async (_, { id }) => {
      try {
        const deletedApplication = await Application.findByIdAndDelete(id);
        if (!deletedApplication) {
          throw new Error("Application not found");
        }
        return deletedApplication;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteReview: async (_, { id }) => {
      try {
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
          throw new Error("Review not found");
        }
        return deletedReview;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteCompanyProfile: async (_, { id }) => {
      try {
        const deletedCompanyProfile = await CompanyProfile.findByIdAndDelete(id);
        if (!deletedCompanyProfile) {
          throw new Error("Company profile not found");
        }
        return deletedCompanyProfile;
      } catch (err) {
        throw new Error(err);
      }
    },
    createApplication: async (parent, { jobId, seekerId, fName, lName }) => {
      const updatedJob = await Job.findOneAndUpdate(
        { _id: jobId },
        {
          $addToSet: { 
            applications: { seekerId: seekerId, fName: fName, lName: lName }  
          }
        },
        {
          new: true
        },
      );

      return updatedJob;
    }
  },
};

module.exports = resolvers;
