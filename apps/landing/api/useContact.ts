import { Rest } from 'rest';
import dayjs from 'dayjs';
import { ContactRequest } from '@components/contact/contact.type';

const mondayApiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY;
const groupId = 'grupo_nuevo17439';
const boardId = '5210496844';

export const useContact = () => {
  const { post } = Rest();

  const sendContact = ({
    apellido,
    email,
    nombre,
    telefono,
  }: ContactRequest) => {
    const date = dayjs().format('YYYY-MM-DD');
    const fullName = `${nombre} ${apellido}`;
    const item = {
      texto8: email,
      texto0: telefono,
      date,
    };

    const query = `
        mutation { 
            create_item (
                board_id: ${boardId}, 
                group_id: "${groupId}", 
                item_name: "${fullName}", 
                column_values: ${JSON.stringify(JSON.stringify(item))}
                ) 
                { id }
            }
        `.replace(/(\r\n|\n|\r)/gm, '');

    return post('https://api.monday.com/v2', {
      customToken: mondayApiKey,
      data: {
        query,
      },
    });
  };

  return {
    sendContact,
  };
};
