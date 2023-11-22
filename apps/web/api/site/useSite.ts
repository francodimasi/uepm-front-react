import { ENDPOINTS } from "@api/endpoints.conts";
import { PageResponse } from "@core/types";
import { useRest } from "rest";
import { Site, SitesParams } from "./site.types";

export const useSite = () => {
  const { get } = useRest();

  const getAllSites = async () => {
    const response = await get<PageResponse<Site>>(ENDPOINTS.SITES);
    return response.page;
  };

  const getSites = async (
    params: SitesParams = { verified: true, page: 1 }
  ) => {
    const { verified = true, page = 1, query } = params;

    let queryParams = `?verified=${verified}&page=${page}`;
    if (query) {
      queryParams += `&query=${query}`;
    }

    const response = await get<PageResponse<Site>>(
      `${ENDPOINTS.SITES}${queryParams}`
    );
    return response.page;
  };

  const getSiteById = (id: number) => {
    return get<Site>(`${ENDPOINTS.SITES}/${id}`);
  };

  const getSiteByName = (name: string) => {
    return get<Site>(`${ENDPOINTS.SITES}/${name}`);
  };

  return {
    getAllSites,
    getSites,
    getSiteById,
    getSiteByName,
  };
};
