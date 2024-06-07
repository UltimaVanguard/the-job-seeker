const { Job, application, User, review } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth')


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
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
    createUser: async (parent, { username, email, password, role }) => {
      try {
        const user = await User.create({
          username,
          email,
          password,
          role,
        });
        const token = signToken(user);
        return { token, user};
      } catch (err) {
        throw new Error(err);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    createSeekerProfile: async (parent, {id, fName, lName, address, phone}) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: id},
        { 
          $set: {
            seekerProfile: { fName: fName, lName: lName, address: address, phone: phone},
          },
        },
        {
          new: true
        }
      );
      return updatedUser
      throw AuthenticationError
    },
    createEmployerProfile: async (parent, {id, companyName, address, phone, email, industry}) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: id},
        { 
          $set: {
            employerProfile: { companyName: companyName, address: address, phone: phone, email: email, industry: industry},
          },
        },
        {
          new: true
        }
      );
      return updatedUser
      throw AuthenticationError
    },
  },
};

module.exports = resolvers;
