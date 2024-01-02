import { Rest } from 'rest';
import { LegalDocuments } from '../../models/legalDocuments.types';
import { ENDPOINTS } from '@api/endpoints';

export const legalDocumentsRequests = () => {
  const { get } = Rest();

  const getLegalDocuments = async (lang: string) => {
    const response = await get<LegalDocuments>(
      `${ENDPOINTS.LEGAL_DOCUMENTS}?lang=${lang}&document_type=terms`,
    );
    return response;
  };

  return {
    getLegalDocuments,
  };
};
