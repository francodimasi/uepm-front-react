import { ENDPOINTS } from '@api/endpoints';
import { Site } from '@models/site.types';

export const getSiteById = async (id: string): Promise<Site> => {
  try {
    const res = await fetch(`${ENDPOINTS.SITES}/${id}`);
    const data = await res.json();
    return data ? data : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
