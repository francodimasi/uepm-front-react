import { useRest } from "rest";
import { LegalDocuments } from "./legal-documents.types";
import { ENDPOINTS } from "@api/endpoints.conts";

export const useLegalDocuments = () => {
  const { get } = useRest();

  const getLegalDocuments = async (lang: string) => {
    const response = await get<LegalDocuments>(
      `${ENDPOINTS.LEGAL_DOCUMENTS}?lang=${lang}&document_type=terms`
    );
    return response;
  };

  return {
    getLegalDocuments,
  };
};
