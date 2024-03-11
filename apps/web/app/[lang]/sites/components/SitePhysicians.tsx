import { H4, P2 } from 'ui/core';
import { SitePhysiciansProps } from '../Sites.types';

export const SitePhysicians: React.FC<SitePhysiciansProps> = ({
  physicians,
  title,
}) => {
  return (
    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
      <H4 label={title} className="text-primary my-0 lg:my-0" />
      <div className="w-full grid sm:grid-cols-3 gap-x-36 gap-2">
        {physicians.map((physician) => (
          <P2
            className="!leading-relaxed !m-0"
            key={physician.id}
          >{`${physician.first_name} ${physician.last_name}`}</P2>
        ))}
      </div>
    </div>
  );
};
