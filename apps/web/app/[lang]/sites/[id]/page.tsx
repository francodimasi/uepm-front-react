import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@intl/navigation';
import { ArrowBackIcon } from 'ui/core/icons';
import { headers } from 'next/headers';
import { Layout } from '@components/core/layout/Layout';
import { getTranslations, defaultLocale } from 'intl';
import { SiteProps } from './Site.types';
import { getSiteById } from '@api/sites/requests';
import { H3, Tag, H4, P2, Avatar } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { setMetadata } from './helpers';
import { SiteCard } from './components/SiteCard';
import { SiteSpecializations } from '../components/shared/SiteSpecializations';
import { SitePerks } from '../components/shared/SitePerks';
import { SitePhysicians } from '../components/shared/SitePhysicians';
import { SiteConditions } from '../components/shared/SiteConditions';

const Page = async ({ params: { lang = defaultLocale, id } }: SiteProps) => {
  const site = await getSiteById(id, lang);
  if (!site) notFound();
  const t = await getTranslations({ lang, namespace: 'sites.site' });
  const tActions = await getTranslations({ lang, namespace: 'actions' });
  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0">
          <div className="justify-between items-center inline-flex h-12">
            <Link href="/" locale={lang}>
              <ArrowBackIcon />
            </Link>
          </div>

          <div className="h-full flex-col flex gap-4">
            <H3
              label={site.name}
              className="my-0 sm:my-0 lg:my-0 xl:my-0 !pb-0"
            />
            {site.recruiting && (
              <div className="justify-start items-start gap-2 inline-flex">
                <Tag
                  text={t('recruiting')}
                  className="p-2 px-4 bg-stone-200 uppercase rounded-full justify-end items-center inline-flex text-dark text-xs font-medium font-['DMSans] leading-none whitespace-nowrap"
                />
              </div>
            )}
            {site.description && (
              <P2 className="!leading-relaxed">{site.description}</P2>
            )}
          </div>
        </div>

        <div className="col-span-1 lg:row-span-2 pl-0 flex flex-col gap-12 lg:gap-10">
          <SiteCard
            address={site.address}
            name={site.name}
            website={site.url}
            logo={site.logo}
          />
        </div>

        <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 flex-col justify-start items-start gap-14 inline-flex divide-y divide-gray-medium">
          {site.keywords?.length > 0 && (
            <SiteSpecializations
              specializations={site.keywords}
              title={t('specializations')}
            />
          )}
          {site.perks?.length > 0 && (
            <SitePerks perks={site.perks} title={t('benefits')} />
          )}

          {site.physicians?.some(
            (p) => p.role === 'principal_investigator' && p.description,
          ) && (
            <div className="w-full pt-14 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14">
                  {site.physicians
                    .filter(
                      (p) =>
                        p.role === 'principal_investigator' && p.description,
                    )
                    .map((py) => (
                      <div
                        key={py.id}
                        className="flex-col justify-start items-start gap-6 inline-flex"
                      >
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                          <Avatar
                            size="lg"
                            imageUrl={py.avatar}
                            alt={`${py.last_name} ${py.first_name}`}
                          />
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <P2 className="text-primary-dark uppercase leading-tight m-0 p-0 sm:m-0 sm:p-0 lg:m-0 lg:p-0">
                              {t('principalInvestigator')}
                            </P2>
                            <H4 className="text-primary leading-7 m-0 p-0 lg:p-0 lg:m-0">{`${py.first_name} ${py.last_name}`}</H4>
                          </div>
                        </div>
                        <div className="self-stretch flex-col justify-start items-start gap-3 flex w-full">
                          <P2 className="leading-normal m-0 p-0 lg:p-0 lg:m-0">
                            {py.description}
                          </P2>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {site.physicians?.length > 0 && (
            <SitePhysicians
              physicians={site.physicians}
              title={t('physicians')}
            />
          )}
          {site.study_conditions.length > 0 && (
            <SiteConditions
              conditions={site.study_conditions}
              title={t('openStudies')}
              locale={lang}
              seeMore={`${tActions('seeMore')}`}
            />
          )}
        </div>

        {site.site_image && (
          <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 flex-col justify-start items-start gap-14 inline-flex mb-14">
            <div className="w-full flex-col justify-start items-start inline-flex">
              <ImageWithFallback
                src={site.site_image}
                alt={site.name}
                className="rounded-lg"
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: 'auto',
                }}
                width={1000}
                height={560}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;

// TODO : Define and generate metadata
export async function generateMetadata({
  params: { id, lang },
}: SiteProps): Promise<Metadata> {
  const site = await getSiteById(id, lang);

  if (!site) notFound();

  const headersInstance = headers();
  const url = headersInstance.get('x-url');

  return setMetadata({ url, site });
}
