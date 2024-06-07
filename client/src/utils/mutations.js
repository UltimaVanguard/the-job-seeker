import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!, $role: String!) {
        createUser(username: $username, email: $email, password: $password, role: $role) {
            token
            user {
                id
                username
            }
        }
    }
`;

export const NEW_SEEKER_PROFILE = gql`
  mutation Mutation($id: ID!, $fName: String!, $lName: String!, $address: String!, $phone: String!) {
    createSeekerProfile(id: $id, fName: $fName, lName: $lName, address: $address, phone: $phone) {
      username
      seekerProfile {
        address
        fName
        lName
        phone
      }
    }
  }
`;

export const NEW_EMPLOYER_PROFILE = gql`
  mutation CreateEmployerProfile($id: ID!, $name: String!, $address: String!, $phone: String!, $email: String!, $industry: String!) {
     createEmployerProfile( id: $id, companyName: $name, address: $address, phone: $phone, email: $email, industry: $industry) {
      username
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

