
const reviewSchema = `type Review {
    id: ID!
    userId: ID!
    companyId: ID!
    rating: Int!
    comment: String
    createdAt: String!
  }
  
  type Query {
    getReviewById(id: ID!): Review
    getReviewsByUser(userId: ID!): [Review]
    getReviewsByCompany(companyId: ID!): [Review]
  }
  
  type Mutation {
    createReview(
      userId: ID!
      companyId: ID!
      rating: Int!
      comment: String
      createdAt: String!
    ): Review
  }`
  

  module.exports = reviewSchema
