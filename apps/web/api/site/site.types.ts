import { Country } from "@api/country/country.types";
import { Physician } from "@api/physician/physician.types";
import { StudyInSite } from "@api/study/study-sites.types";

export type SitesParams = {
  verified?: boolean;
  page?: number;
  query?: string;
};

export type Site = {
  address: string;
  category: string; 
  country: Country;
  description: string;
  email: string;
  id: number;
  keywords: string[];
  lat: number;
  lng: number;
  logo: string;
  map: string;
  name: string;
  phone: string;
  physicians: Physician[];
  pipedrive_organization_id: string;
  studies: StudyInSite[];
  url: string;
  username: string;
  verified: boolean;
};
