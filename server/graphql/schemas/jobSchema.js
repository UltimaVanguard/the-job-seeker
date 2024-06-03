const { gql } = require('apollo-server-express');

const jobTypeDefs = gql`
  type Job {
    id: ID!
    employerId: ID!
    title: String!
    description: String!
    location: String!
    jobType: String!
    salaryRange: String!
    experienceLevel: String!
    createdAt: String!
    updatedAt: String
    applications: [Application]
  }

  type Application {
    id: ID!
    jobId: ID!
    seekerId: ID!
    resume: String!
    coverLetter: String!
    status: String!
    createdAt: String!
  }

  type Query {
    getJobPosting(id: ID!): Job
  }

  type Mutation {
    createJobPosting(employerId: ID!, title: String!, description: String!, location: String!, jobType: String!, salaryRange: String!, experienceLevel: String!): Job
  }
`;

module.exports = jobTypeDefs;
