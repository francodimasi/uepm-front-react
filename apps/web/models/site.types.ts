import { Country } from '@models/country.types';
import { Physician } from '@models/physician.types';
import { StudyInSite } from '@models/study.types';

export type SitesParams = {
  verified?: boolean;
  page?: number;
  query?: string;
};

export type Site = {
  id: string;
  name: string;
  username: string;
  description: string;
  url: string;
  verified: boolean;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
  category: string;
  pipedrive_organization_id: string;
  keywords: string[];
  logo: string;
  map: string;
  studies: StudyInSite[];
  physicians: Physician[];
  country: Country;
  perks: string[];
  site_image: string;
};
