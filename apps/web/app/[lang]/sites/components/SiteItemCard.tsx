'use client';

import { Card, H4, Tag, P2, Button } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { useTranslations } from 'intl';
import { SiteItemCardProps } from './SiteItemCard.types';

export const SiteItemCard: React.FC<SiteItemCardProps> = ({ site }) => {
  const t = useTranslations('sites.siteItem');
  if (!site) return null;

  return (
    <Card
      key={site.id}
      className="bg-white rounded-lg p-3 lg:!p-6 m-3 sm:m-6 lg:m-3 2xl:m-3 shadow-none"
      disabled={false}
    >
      <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex w-full">
          <div className="self-stretch flex-col justify-start items-start flex ">
            <div className="flex justify-between align-middle flex-row w-full">
              {site.username && (
                <P2 className="!p-0 self-stretch text-primary-dark text-sm lg:text-base font-light font-['DMSans'] uppercase leading-none">
                  {site.username}
                </P2>
              )}
              {site.country?.flag && (
                <ImageWithFallback
                  className="h-5 w-5 rounded-full my-auto object-cover"
                  src={site.country.flag}
                  alt={site.country.name}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <H4 className="font-['DMSans'] line-clamp-4 lg:line-clamp-2 !my-0 !py-0 !text-xl !leading-tight lg:!text-2xl 2xl:!text-3xl lg:!leading-8'">
              {site.name}
            </H4>
          </div>
          {site.keywords?.length > 0 && (
            <div className="justify-start items-start gap-1 gap-y-2 flex flex-wrap">
              {site.keywords
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
              {site.keywords.length > 3 && (
                <P2 className="!leading-none !p-1 !m-0">
                  + {site.keywords.length - 3}
                </P2>
              )}
            </div>
          )}
          <div className="self-stretch justify-end items-center inline-flex">
            <Button
              type="submit"
              color="dark"
              expand="none"
              className="!px-4 !py-1.5"
            >
              <P2 className="!text-sm !font-medium font-['DMSans]' text-white leading-normal">
                {t('viewSite')}
              </P2>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
