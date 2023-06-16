export type StudyInSite = {
  id: number;
  status: string;
  published: boolean;
  nct_id: string;
  acronym: string;
  mutation: string;
  overall_status: string;
  enrollment: number;
  translations: StudyInSiteTranslation[];
};

export type StudyInSiteTranslation = {
  [key: string]: StudyInSiteTranslationContent;
};

export type StudyInSiteTranslationContent = {
  brief_title: string;
  official_title: string;
  conditions_ct: string[];
};
