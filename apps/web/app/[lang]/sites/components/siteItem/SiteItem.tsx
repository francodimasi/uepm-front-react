'use client';

import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card, H4, Tag, P2, Button } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { useTranslations } from 'intl';
import { SiteItemHitProps, SiteItemProps } from './SiteItem.types';
import { AlgoliaSite, SiteHit } from '@models/site.types';
import { SitesBrowserContext } from '../browser/context/provider';

export const SiteItem: React.FC<SiteItemProps & SiteItemHitProps> = ({
  site,
  hit,
  onClick,
}) => {
  const t = useTranslations('sites.siteItem');
  const {
    browserState: { selectedSite },
  } = useContext(SitesBrowserContext);

  const siteItem: AlgoliaSite = site ?? (hit as SiteHit);

  if (!siteItem) return null;

  const isSelected = selectedSite?.id === siteItem?.id;

  return (
    <Card
      key={siteItem.id}
      className={twMerge(
        `bg-white rounded-lg p-3 lg:!p-6 m-0 my-3 sm:m-6 lg:m-3 2xl:m-3 shadow-none hover:border-primary ${
          isSelected && 'border-2 border-primary'
        }`,
      )}
      onClick={() => onClick(siteItem)}
    >
      <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex w-full">
          <div className="self-stretch flex-col justify-start items-start flex ">
            <div className="flex justify-between align-middle flex-row w-full">
              {siteItem.username && (
                <P2 className="!p-0 self-stretch text-primary-dark !text-sm 2xl:text-base uppercase leading-none">
                  {siteItem.username}
                </P2>
              )}
              {siteItem.country_flag && (
                <ImageWithFallback
                  className="h-5 w-5 rounded-full my-auto object-cover"
                  src={siteItem.country_flag}
                  alt={siteItem.country}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <H4 className="line-clamp-4 lg:line-clamp-2 !my-0 !py-0 !text-sm !leading-tight xl:!text-lg 2xl:!text-xl lg:!leading-8'">
              {siteItem.name}
            </H4>
          </div>
          {siteItem.keywords?.length > 0 && (
            <div className="justify-start items-start gap-1 gap-y-2 flex flex-wrap">
              {siteItem.keywords
                .sort((a, b) => a.length - b.length)
                .slice(0, 3)
                .map((keyword, index) => (
                  <div
                    key={index}
                    className="justify-start items-start gap-2 inline-flex"
                  >
                    <Tag
                      text={keyword}
                      className="px-3 py-1.5 bg-stone-200 rounded-full justify-end items-center gap-2 text-dark text-xs font-medium font-['DMSans'] uppercase leading-none flex whitespace-nowrap"
                    />
                  </div>
                ))}
              {siteItem.keywords.length > 3 && (
                <P2 className="!leading-none !p-1 !m-0">
                  + {siteItem.keywords.length - 3}
                </P2>
              )}
            </div>
          )}
          <div className="self-stretch justify-end items-center inline-flex">
            <Button
              type="submit"
              color="dark"
              expand="none"
              className="!px-4 !py-1"
              size="sm"
            >
              <P2 className="!text-sm !font-medium !font-['DMSans]' text-white leading-normal !pb-0">
                {t('viewSite')}
              </P2>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
