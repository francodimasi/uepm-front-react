import { ContactUsFormRequest } from '@components/shared/contactUs/ContactUs.types';
import dayjs from 'dayjs';

export const buildQuery = ({
  name,
  lastname,
  email,
  phone,
  query: userQuery,
}: ContactUsFormRequest) => {
  const fullName = `${name} ${lastname}`;
  const item = {
    texto8: email,
    texto0: phone,
    consulta: userQuery,
    date: dayjs().format('YYYY-MM-DD'),
  };

  const query = `
    mutation { 
      create_item (
        board_id: ${process.env['MONDAY_BOARD']}, 
        group_id: "${process.env['MONDAY_GROUP']}", 
        item_name: "${fullName}", 
        column_values: ${JSON.stringify(JSON.stringify(item))}
        ) 
        { id }
      }
  `.replace(/(\r\n|\n|\r)/gm, '');

  return query;
};
