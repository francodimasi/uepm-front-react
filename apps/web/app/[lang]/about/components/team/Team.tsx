import { LocaleProps, useTranslations } from 'intl';
import { TeamProps } from './Team.types';
import { Tag } from 'ui/core';
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
        <span className="pb-4 pb-10 sm:pb-20 text-dark text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-6xl lg:leading-[72px] font-semibold font-['Lexend']">
          {t('title')}
        </span>
        <span className="pb-2 pb-5 sm:pb-10 text-dark text-xl leading-5 sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-10 font-semibold font-['Lexend']">
          {t('board')}
        </span>
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
            <span className="pb-2 pb-6 sm:pb-10 text-dark text-xl leading-5 sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-10 font-semibold font-['Lexend']">
              {t('staff')}
            </span>
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
          <div className="sm:hidden pt-6">
            <Link href="/" locale={locale}>
              <span className="flex justify-center text-base font-semibold font-['DMSans'] leading-none">
                {tActions('seeMore')}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
