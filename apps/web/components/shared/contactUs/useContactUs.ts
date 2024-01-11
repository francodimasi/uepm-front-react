import { Rest } from 'rest';
import dayjs from 'dayjs';
import { ContactUsFormRequest } from './ContactUs.types';

const mondayApiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY;
const groupId = 'grupo_nuevo17439'; // TODO: Move to env variable
const boardId = '5210496844'; // TODO: Move to env variable

export const useContactUs = () => {
  const { post } = Rest();

  const sendQuery = ({
    name,
    lastname,
    email,
    phone,
    query: userQuery,
  }: ContactUsFormRequest) => {
    const date = dayjs().format('YYYY-MM-DD');
    const fullName = `${name} ${lastname}`;
    const item = {
      texto8: email,
      texto0: phone,
      textoWTF: userQuery, // TODO: Which is the correct key?
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
      // TODO: Move to env variable
      customToken: mondayApiKey,
      data: {
        query,
      },
    });
  };

  return {
    sendQuery,
  };
};
