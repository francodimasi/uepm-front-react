import { ENDPOINTS } from '@api/endpoints';
import { PageResponse } from '@core/types';
import { Rest } from 'rest';

export const partnerRequests = () => {
  const { get } = Rest();

  const getPartners = async () => {
    /**
     * @todo create partner type
     */
    const response = await get<PageResponse<any>>(ENDPOINTS.PARTNERS);
    return response.page;
  };

  return {
    getPartners,
  };
};
