import Link from 'next/link';
import { H4, L1, P2 } from 'ui/core';
import { SiteConditionsProps } from '../../Sites.types';

export const SiteConditions: React.FC<SiteConditionsProps> = ({
  title,
  conditions,
  locale,
  seeMore,
}) => {
  return (
    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
      <H4 label={title} className="text-primary my-0 lg:my-0" />
      <div className="w-full grid sm:grid-cols-2 gap-x-16 gap-y-2 pb-3">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className=" self-stretch justify-start items-center gap-2 inline-flex"
          >
            <P2 className="!leading-relaxed !m-0">{`${condition}`}</P2>
          </div>
        ))}
      </div>
      <div className="justify-center items-center inline-flex">
        <Link href="/" locale={locale}>
          <L1 label={seeMore} className="hover:underline" />
        </Link>
      </div>
    </div>
  );
};
