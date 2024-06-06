const Job = require("../models/Job");
const Application = require("../models/Application");
const Review = require("../models/review");
const User = require("../models/User");

const resolvers = {
 
  Query: {
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
  },
  Mutation: {
    createJobPosting: async (
      _,
      {
        employerId,
        title,
        description,
        location,
        jobType,
        salaryRange,
        experienceLevel,
      }
    ) => {
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
    createReview: async (
      _,
      { userId, companyId, rating, comment, createdAt }
    ) => {
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
    },
  },
};

module.exports = resolvers;
