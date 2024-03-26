import { AlgoliaSite } from '@models/site.types';

export const updatedSince = (
  nowEpochMs: number,
  dateEpochMs: number,
  tTimeUnits,
) => {
  const ago = tTimeUnits('ago');

  const seconds = Math.floor((nowEpochMs - dateEpochMs) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('years')}${ago}`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('months')}${ago}`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('days')}${ago}`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('hours')}${ago}`;
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `${interval} ${tTimeUnits('minutes')}${ago}`;
  }
  return `${seconds} ${tTimeUnits('seconds')}${ago}`;
};

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
