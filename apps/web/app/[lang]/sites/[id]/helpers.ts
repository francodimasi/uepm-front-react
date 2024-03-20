import { Site } from '@models/site.types';

/**
 * Add meta data to the page
 */
export const setMetadata = function ({
  url,
  site,
}: {
  url: string;
  site: Site;
}) {
  return {
    title: site.name + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: site.description,
    openGraph: {
      title: site.name + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: site.description,
      type: 'website',
      siteName: process.env.NEXT_PUBLIC_COMPANY_NAME,
      images: site.logo,
      url: url,
    },
    other: {
      logo: site.logo,
      image: site.site_image,
    },
  };
};
