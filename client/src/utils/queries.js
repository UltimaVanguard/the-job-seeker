import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      role
      seekerProfile {
        address
        fName
        lName
        phone
      }
      employerProfile {
        companyName
        address
        email
        phone
        industry
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
      role
      seekerProfile {
        address
        fName
        lName
        phone
      }
      employerProfile {
        companyName
        address
        email
        phone
        industry
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  query getJobs {
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
  query getCompanyJobs($employerId: ID!) {
    getCompanyJobs(employerId: $employerId) {
      id
      title
      salaryRange
      location
      jobType
      applications {
        seekerId
        fName
        lName
      }
    }
  }
`;