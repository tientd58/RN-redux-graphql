import client from '../../apollo/client';
import queryGetEvents from './ghql';
import { fetchPolicy, errorPolicy } from '../../utils/constants';

const getEventsService = variables =>
  client.query({
    query: queryGetEvents,
    variables,
    fetchPolicy,
    errorPolicy
  });

export { getEventsService as default };
