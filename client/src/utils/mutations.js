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

