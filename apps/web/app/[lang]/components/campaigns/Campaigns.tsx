import { CampaignsProps } from './Campaigns.types';
import { CampaignsList } from './CampaignsList';

export const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
  return (
    <>
      <div className="sm:hidden">
        <CampaignsList campaigns={campaigns} perPage={1} />
      </div>
      <div className="hidden sm:block 2xl:hidden">
        <CampaignsList campaigns={campaigns} perPage={2} />
      </div>
      <div className="hidden 2xl:block">
        <CampaignsList campaigns={campaigns} perPage={3} />
      </div>
    </>
  );
};
