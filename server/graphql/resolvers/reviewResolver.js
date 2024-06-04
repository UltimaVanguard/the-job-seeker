const Review = require('./models/review');

const reviewResolvers = {
  Query: {
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
  },
  Mutation: {
    createReview: async (_, { userId, companyId, rating, comment, createdAt }) => {
      try {
        const review = new Review({
          userId,
          companyId,
          rating,
          comment,
          createdAt
        });
        const savedReview = await review.save();
        return savedReview;
      } catch (error) {
        throw new Error(`Error creating review: ${error}`);
      }
    },
  },
};

module.exports = reviewResolvers;
