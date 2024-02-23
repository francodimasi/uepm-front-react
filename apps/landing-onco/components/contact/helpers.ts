import { ContactRequest } from './contact.type';

const routeEndpoint = '/api/contactUs';

export const sendContactRequest = async (data: ContactRequest) => {
  return await fetch(routeEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
