import { Rest } from 'rest';
import dayjs from 'dayjs';
import { ContactUsFormRequest } from './ContactUs.types';

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
      consulta: userQuery,
      date,
    };

    const query = `
      mutation { 
        create_item (
          board_id: ${process.env.NEXT_PUBLIC_MONDAY_BOARD}, 
          group_id: "${process.env.NEXT_PUBLIC_MONDAY_GROUP}", 
          item_name: "${fullName}", 
          column_values: ${JSON.stringify(JSON.stringify(item))}
          ) 
          { id }
        }
    `.replace(/(\r\n|\n|\r)/gm, '');

    return post(process.env.NEXT_PUBLIC_MONDAY_URL, {
      customToken: process.env.NEXT_PUBLIC_MONDAY_API_KEY,
      data: {
        query,
      },
    });
  };

  return {
    sendQuery,
  };
};
