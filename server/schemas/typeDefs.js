const typeDefs = `
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

  type JobPosting {
    id: ID!
    employerId: ID!
    title: String!
    description: String!
    location: String!
    jobType: String!
    salaryRange: String!
    experienceLevel: String!
    createdAt: String!
    updatedAt: String!
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

  type CompanyProfile {
    id: ID!
    employerId: ID!
    companyName: String!
    companyDescription: String!
    reviews: [Review]
  }

  type Review {
    id: ID!
    userId: ID!
    companyId: ID!
    rating: Int!
    comment: String
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getJobPosting(id: ID!): JobPosting
    getApplication(id: ID!): Application
    getReviewsByCompany(id: ID!): CompanyProfile
    getReviewById(id: ID!): Review
    getReviewsByUser(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth
    createJobPosting(employerId: ID!, title: String!, description: String!, location: String!, jobType: String!, salaryRange: String!, experienceLevel: String!): JobPosting
    createApplication(jobId: ID!, seekerId: ID!, resume: String!, coverLetter: String!): Application
    createCompanyProfile(employerId: ID!, companyName: String!, companyDescription: String!): CompanyProfile
    updateApplicationStatus(id: ID!, status: String!): Application
    createReview(userId: ID!, companyId: ID!, rating: Int!, comment: String): Review
  }
`;

module.exports = typeDefs;

