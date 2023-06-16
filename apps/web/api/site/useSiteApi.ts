import { BASE_URL } from "@core/constants";
import { useRest } from "rest";
import { Site, SitesParams } from "./site.types";
import { PageResponse } from "@core/types";

export const useSiteApi = () => {
  const { get } = useRest();

  const getAllSites = async () => {
    return get<PageResponse<Site>>(`${BASE_URL}/sites`);
  };

  const getSites = async (params: SitesParams = { verified: true, page: 1}) => {
    const { verified = true, page = 1, query } = params;

    let queryParams = `?verified=${verified}&page=${page}`;
    if (query) {
        queryParams += `&query=${query}`;
    }

    return get<PageResponse<Site>>(`${BASE_URL}/sites${queryParams}`);
  };

  const getSiteById = (id: number) => {
    return get<Site>(`${BASE_URL}/sites/${id}`);
  };

  const getSiteByName = (name: string) => {
    return get<Site>(`${BASE_URL}/sites/${name}`);
  };

  return {
    getAllSites,
    getSites,
    getSiteById,
    getSiteByName
  };
};
