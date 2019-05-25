import client from '../../apollo/client';
import { mutationRegister } from './ghql';

const resgisterService = variables => {
  client.mutate({
    mutation: mutationRegister,
    variables
  });
};

export default {
  resgisterService
};
