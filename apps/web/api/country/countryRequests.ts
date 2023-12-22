import { Rest } from 'rest';
import { Country } from './country.types';
import { PageResponse } from '@core/types';
import { ENDPOINTS } from '@api/endpoints.conts';

export const countryRequests = () => {
  const { get } = Rest();

  const getCountries = async () => {
    const result = await get<PageResponse<Country>>(ENDPOINTS.COUNTRIES);
    return result.page;
  };

  return {
    getCountries,
  };
};
