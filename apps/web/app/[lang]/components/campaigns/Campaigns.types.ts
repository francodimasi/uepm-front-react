export type Campaign = {
  condition: string;
  brief_title: string;
  link: string;
  image: string;
};

export type CampaignsProps = {
  campaigns: Campaign[];
  perPage?: number;
};

export type CampaignProps = {
  tag: string;
  title: string;
  link: string;
  image: string;
};
