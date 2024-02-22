import { ContactUsFormRequest } from './ContactUs.types';
import dayjs from 'dayjs';

export const getInitialValues = (t: Function) => ({
  name: {
    value: '',
    label: t('fields.name'),
    required: true,
  },
  lastname: {
    value: '',
    label: t('fields.lastname'),
    required: true,
  },
  email: {
    value: '',
    label: t('fields.email'),
    required: true,
  },
  phone: {
    value: '',
    label: `${t('fields.phone')} ${t('optional')}`,
    required: false,
  },
  query: {
    value: '',
    label: t('fields.query'),
    required: true,
  },
});

export const buildQuery = ({
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
          board_id: ${process.env.MONDAY_BOARD}, 
          group_id: "${process.env.MONDAY_GROUP}", 
          item_name: "${fullName}", 
          column_values: ${JSON.stringify(JSON.stringify(item))}
          ) 
          { id }
        }
    `.replace(/(\r\n|\n|\r)/gm, '');

  return query;
};
