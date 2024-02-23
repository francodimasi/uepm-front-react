import { ContactRequest } from '@components/contact/contact.type';
import dayjs from 'dayjs';

export const buildQuery = ({
  apellido,
  email,
  especialidad,
  nombre,
  whatsapp,
  localidad,
  contacto,
}: ContactRequest) => {
  const fullName = `${nombre} ${apellido}`.trim();
  const item = {
    texto8: email,
    texto0: whatsapp,
    texto: especialidad,
    texto83: contacto,
    texto49: localidad,
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
