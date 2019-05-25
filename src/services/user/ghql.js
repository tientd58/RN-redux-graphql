import gql from 'graphql-tag';

const mutationRegister = gql`
  mutation mutationRegister(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $password: String
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      password: $password
    ) {
      token
    }
  }
`;

export default {
  mutationRegister
};
