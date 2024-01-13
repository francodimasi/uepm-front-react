import { LocaleProps, useTranslations } from 'intl';
import { TeamProps } from './Team.types';
import { H2, H3, L1, Tag } from 'ui/core';
import { TeamMemerItem } from './TeamMemberItem';
import { Link } from '@intl/navigation';

export const Team: React.FC<TeamProps & LocaleProps> = ({
  board = [],
  staff,
  locale,
}) => {
  const t = useTranslations('about.sections.team');
  const tActions = useTranslations('actions');

  if (board.length === 0) return null;

  return (
    <div className="flex flex-col py-8 lg:py-10">
      <div className="flex flex-col gap-2">
        <Tag
          text={t('tag')}
          className='py-2 text-primary-dark text-sm lg:text-base font-medium font-["DMSans"] uppercase'
        />
        <H2 label={t('title')} className="mt-0 sm:mt-0 lg:mt-0 xl:mt-0" />
        <H3 label={t('board')} />
        <div className="grid grid-cols-2 sm:hidden gap-4">
          {board.map((mmember, index) => (
            <TeamMemerItem
              key={index}
              member={mmember}
              className="items-center"
            />
          ))}
        </div>
        <div className="hidden sm:grid xl:hidden grid-cols-4 gap-4 lg:gap-8">
          {board.map((mmember, index) => (
            <TeamMemerItem
              key={index}
              member={mmember}
              className="items-center hover:text-[#F07000]"
            />
          ))}
        </div>
        <div className="hidden xl:grid grid-cols-6 gap-8">
          {board.map((mmember, index) => (
            <TeamMemerItem
              key={index}
              member={mmember}
              className="items-center hover:text-[#F07000]"
            />
          ))}
        </div>
        {staff && (
          <>
            <H3 label={t('staff')} />
            <div className="grid grid-cols-2 sm:hidden gap-4">
              {staff.slice(0, 4).map((mmember, index) => (
                <TeamMemerItem
                  key={index}
                  member={mmember}
                  alignment="start"
                  size="lg"
                  className="items-start border-s-1 border-gray-medium ps-4"
                />
              ))}
            </div>
            <div className="hidden sm:grid xl:hidden grid-cols-4 gap-4 lg:gap-8">
              {staff.map((mmember, index) => (
                <TeamMemerItem
                  key={index}
                  member={mmember}
                  alignment="start"
                  size="xl"
                  className="items-start border-s-1 border-gray-medium ps-5"
                />
              ))}
            </div>
            <div className="hidden xl:grid grid-cols-6 gap-8">
              {staff.map((mmember, index) => (
                <TeamMemerItem
                  key={index}
                  member={mmember}
                  alignment="start"
                  size="xl"
                  className="items-start border-s-1 border-gray-medium ps-6"
                />
              ))}
            </div>
          </>
        )}
        {staff?.length > 4 && (
          <div className="sm:hidden pt-6 flex justify-center">
            <Link href="/" locale={locale} className="flex">
              <L1 label={tActions('seeMore')} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
