import { Country } from '@models/country.types';
import { Physician } from '@models/physician.types';
import { Hit } from 'ui/components/algolia/hits/Hits.types';

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
  physicians: Physician[];
  perks: string[];
  site_image: string;
  study_conditions: string[];
  recruiting: boolean;
  country: Country;
};

export type AlgoliaSite = {
  name: string;
  id: string;
  verified: boolean;
  city: string;
  address: string;
  url: string;
  phone: string;
  keywords: string[];
  perks: string[];
  username: string;
  description: string;
  country: string;
  country_flag: string;
  object_type: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  site_image: string;
  logo_url: string;
};

export type SiteHit = Hit & AlgoliaSite;
