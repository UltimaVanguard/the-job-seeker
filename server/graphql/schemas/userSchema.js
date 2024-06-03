const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
    profile: Profile
  }

  type Profile {
    seekerProfile: JobSeekerProfile
    employerProfile: EmployerProfile
  }

  type JobSeekerProfile {
    resume: String
    coverLetter: String
    applications: [Application]
  }

  type EmployerProfile {
    companyProfile: CompanyProfile
    jobPostings: [JobPosting]
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, role: String!): User
  }
`;

module.exports = userTypeDefs;
