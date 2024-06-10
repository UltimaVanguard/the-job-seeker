const typeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
    seekerProfile: seekerProfile
    employerProfile: employerProfile
  }

  type seekerProfile {
    fName: String
    lName: String
    address: String
    phone: String
  }

  type employerProfile {
    companyName: String
    address: String
    phone: String
    email: String
    industry: String
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
    applications: [Application]
  }

  type Application {
    id: ID!
    jobId: ID!
    seekerId: ID!
    fName: String!
    lName: String!
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
    getReviewsByCompany(companyId: ID!): [Review]
    getReviewById(id: ID!): Review
    getReviewsByUser(userId: ID!): [Review]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth
    createSeekerProfile(id: ID!, fName: String!, lName: String!, address: String!, phone: String!): User
    createEmployerProfile(id: ID!, companyName: String!, address: String!, phone: String!, email: String!, industry: String!): User
    createJobPosting(employerId: ID!, title: String!, description: String!, location: String!, jobType: String!, salaryRange: String!, experienceLevel: String!): JobPosting
    createApplication(jobId: ID!, seekerId: ID!, fName: String!, lName: String!): JobPosting
    createCompanyProfile(employerId: ID!, companyName: String!, companyDescription: String!): CompanyProfile
    updateApplicationStatus(id: ID!, status: String!): Application
    createReview(userId: ID!, companyId: ID!, rating: Int!, comment: String): Review
    deleteUser(id: ID!): User
    deleteJobPosting(id: ID!): JobPosting
    deleteApplication(id: ID!): Application
    deleteReview(id: ID!): Review
    deleteCompanyProfile(id: ID!): CompanyProfile
  }
`;

module.exports = typeDefs;
