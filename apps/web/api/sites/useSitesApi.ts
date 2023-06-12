import { useRest } from "rest"

export const useSitesApi = () => {
    
    const { get } = useRest();
    
    const getAllSites = () => {
        return get<any>('sites')
    }

    return {
        getAllSites
    }
}