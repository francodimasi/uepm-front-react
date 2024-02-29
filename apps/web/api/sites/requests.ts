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

// TODO: Implement Algolia
export const getSites = async (): Promise<Site[]> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.SITES}?ids[]=b643cc15-72bb-4eb5-90ac-9f078c74396f&ids[]=2e2099f5-e22a-4969-b12b-3ac2767bec93&ids[]=f7c042f6-e2c1-4f6e-8af8-f5bf0f1fd169&ids[]=e12a7978-c628-4713-b2ca-bd999b06bb68&ids[]=7060ee6b-153e-478c-b363-6535c746cce7&ids[]=77c2f2b8-73a3-4175-8c68-cc8520cb2431&ids[]=9560425b-4bca-4854-9b3c-79b20bc233b1`,
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.page || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
