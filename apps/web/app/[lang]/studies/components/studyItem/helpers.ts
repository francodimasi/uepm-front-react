import { AlgoliaSite } from '@models/site.types';

export const getUniqueSiteCountries = (sites: AlgoliaSite[]) => {
  const seenCountries = {};
  const uniqueSitesCountries: { flag: string; name: string }[] = [];
  sites.forEach((site) => {
    if (!seenCountries[site.country]) {
      seenCountries[site.country] = true;
      uniqueSitesCountries.push({
        flag: site.country_flag,
        name: site.country,
      });
    }
  });
  return uniqueSitesCountries;
};
