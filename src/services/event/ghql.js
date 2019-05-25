import gql from 'graphql-tag';

const queryGetEvents = gql`
  query {
    events {
      id
      description
      url
    }
  }
`;

export { queryGetEvents as default };
