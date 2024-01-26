import { CampaignsProps } from './Campaigns.types';
import { CampaignsList } from './CampaignsList';

export const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
  return (
    <>
      <div className="sm:hidden">
        <CampaignsList campaigns={campaigns} perPage={1} />
      </div>
      <div className="hidden sm:block">
        <CampaignsList campaigns={campaigns} perPage={2} />
      </div>
    </>
  );
};
