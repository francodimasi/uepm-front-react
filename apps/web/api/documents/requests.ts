import { Document } from '../../models/documents.types';
import { ENDPOINTS } from '@api/endpoints';

export const getDocument = async ({
  lang,
  type,
}: {
  lang: string;
  type: string;
}): Promise<Document> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.DOCUMENTS}?lang=${lang}&document_type=${type}`,
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
