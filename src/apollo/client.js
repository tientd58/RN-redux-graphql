import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';

// Point backend graphql
const httpLink = new HttpLink({
  uri: ''
});

// Config authenticate header with token
const authLink = setContext(async () => {
  const token = await AsyncStorage.getItem('authToken');

  return {
    headers: {
      'Auth-Token': token ? `${token}` : null
    }
  };
});

// Combine authenticate and point back-end graphql
const httpLinkWithAuthToken = authLink.concat(httpLink);

// initialize cache as data store
const cache = new InMemoryCache();

// initialize client to query graphql from ApolloClient
const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache
});

export default client;
