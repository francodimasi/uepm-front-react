import { ContactRequest } from '@components/contact/contact.type';
import dayjs from 'dayjs';

export const buildQuery = ({
  apellido,
  email,
  nombre,
  telefono,
}: ContactRequest) => {
  const fullName = `${nombre} ${apellido}`;
  const item = {
    texto8: email,
    texto0: telefono,
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
