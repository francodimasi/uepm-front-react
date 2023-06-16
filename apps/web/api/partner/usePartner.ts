import { ENDPOINTS } from "@api/endpoints.conts";
import { PageResponse } from "@core/types";
import { useRest } from "rest"

export const usePartner = () => {

    const { get } = useRest();

    const getPartners = async () => {
        /**
         * @todo create partner type
         */
        const response = await get<PageResponse<any>>(ENDPOINTS.PARTNERS);
        return response.page;
    }

    return {
        getPartners
    }
}