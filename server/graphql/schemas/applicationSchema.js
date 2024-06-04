const { gql } = require('apollo-server-express');

const applicationTypeDefs = gql `type Application {
    id: ID!
    jobId: ID!
    seekerId: ID!
    resume: String!
    coverLetter: String!
    status: String!
    createdAt: String!
  },
  
  type Query {
    getApplicationById(id: ID!): Application
    getApplicationsByJob(jobId: ID!): [Application]
    getApplicationsBySeeker(seekerId: ID!): [Application]
  },
  
  type Mutation {
    createApplication(jobId: ID!, seekerId: ID!, resume: String!, coverLetter: String!, status: String!, createdAt: String!): Application
    updateApplicationStatus(id: ID!, status: String!): Application
  };`

  module.exports = applicationTypeDefs
  