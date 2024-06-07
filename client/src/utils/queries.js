import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      profile {
        JobSeekerProfile {
            fname
            lname
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      role
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  query Query {
    getJobs {
      id
      title
      salaryRange
      location
      jobType
    }
  }
`;

export const QUERY_COMPANY_JOBS = gql`
  query Query($employerId: ID!) {
    getCompanyJobs(employerId: $employerId) {
      id
      title
      salaryRange
      location
      jobType
    }
  }
`;