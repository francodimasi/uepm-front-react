import { ContactUsSiteFormApiRequest } from '@app/[lang]/sites/[id]/components/contactForm/ContactSiteForm.types';
import dayjs from 'dayjs';

export const buildQuery = ({
  name,
  email,
  phone,
  query: userQuery,
  specialty,
  sponsor,
  isDoctor,
}: ContactUsSiteFormApiRequest) => {
  const item = {
    texto8: email,
    texto0: phone,
    texto49: specialty,
    texto5: sponsor,
    consulta: userQuery,
    date: dayjs().format('YYYY-MM-DD'),
  };
  const group_id = isDoctor
    ? process.env['MONDAY_SITES_CONTACT_DOCTOR_GROUP']
    : process.env['MONDAY_SITES_CONTACT_SPONSOR_GROUP'];
  const query = `
    mutation { 
      create_item (
        board_id: ${process.env['MONDAY_SITES_CONTACT_BOARD']}, 
        group_id: "${group_id}", 
        item_name: "${name}", 
        column_values: ${JSON.stringify(JSON.stringify(item))}
        ) 
        { id }
      }
  `.replace(/(\r\n|\n|\r)/gm, '');

  return query;
};
