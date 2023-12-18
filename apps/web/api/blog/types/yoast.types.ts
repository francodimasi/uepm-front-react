export type YoastHeadJson = {
  title: string;
  description: string;
  robots: YoastRobots;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_url: string;
  og_site_name: string;
  og_description: string;
  twitter_card: string;
  schema: YoastSchema;
};

type YoastRobots = {
  index: string;
  follow: string;
  'max-snippet': string;
  'max-image-preview': string;
  'max-video-preview': string;
};

type YoastSchema = {
  '@context': string;
  '@graph': YoastSchemaGraph[];
};

type YoastSchemaGraph = {
  '@type': string;
  '@id': string;
  url?: string;
  name?: string;
  description?: string;
  isPartOf?: { '@id': string };
  breadcrumb?: { '@id': string };
  inLanguage?: string;
  itemListElement?: YoastSchemaGraphElement[];
  potentialAction?: YoastSchemaGraphAction[];
};

type YoastSchemaGraphElement = {
  '@type': string;
  position: number;
  name: string;
  item?: string;
};

type YoastSchemaGraphAction = {
  '@type': string;
  target: {
    '@type': string;
    urlTemplate: string;
  };
  'query-input': string;
};
