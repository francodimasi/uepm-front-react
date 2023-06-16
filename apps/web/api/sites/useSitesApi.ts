import { BASE_URL } from "@core/constants";
import { useRest } from "rest"

export const useSitesApi = () => {
    
    const { get } = useRest();
    
    const getAllSites = async () => {
        return get<any>(`${BASE_URL}/sites`)
    }

    return {
        getAllSites
    }
}