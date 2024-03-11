import { CheckIcon, H4, P2 } from 'ui/core';
import { SitePerksProps } from '../Sites.types';

export const SitePerks: React.FC<SitePerksProps> = ({ perks, title }) => {
  return (
    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
      <H4 label={title} className="text-primary my-0 lg:my-0" />
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        {perks?.map((perk, index) => (
          <div
            key={index}
            className="self-stretch justify-start items-center gap-2 inline-flex"
          >
            <CheckIcon color="dark" />
            <P2 className="!leading-relaxed !m-0 !p-0">{perk}</P2>
          </div>
        ))}
      </div>
    </div>
  );
};
