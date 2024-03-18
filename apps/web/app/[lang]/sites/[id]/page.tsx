import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@intl/navigation';
import { ArrowBackIcon } from 'ui/core/icons';
import { headers } from 'next/headers';
import { Layout } from '@components/core/layout/Layout';
import { getTranslations, defaultLocale } from 'intl';
import { SiteProps } from './Site.types';
import { getSiteById } from '@api/sites/requests';
import { H3, Tag, P2 } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { studyStatus } from './constants';
import { setMetadata, getSiteConditions } from './helpers';
import { SiteCard } from './components/SiteCard';
import { SiteSpecializations } from '../components/SiteSpecializations';
import { SitePerks } from '../components/SitePerks';
import { SitePhysicians } from '../components/SitePhysicians';
import { SiteConditions } from '../components/SiteConditions';

const Page = async ({ params: { lang = defaultLocale, id } }: SiteProps) => {
  const site = await getSiteById(id);
  if (!site) notFound();
  const t = await getTranslations({ lang, namespace: 'sites.site' });
  const tActions = await getTranslations({ lang, namespace: 'actions' });
  const conditionsList = getSiteConditions(site, lang);
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
            {site.studies?.some(
              (study) => study.status === studyStatus.RECRUITING,
            ) && (
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

          {site.physicians?.length > 0 && (
            <SitePhysicians
              physicians={site.physicians}
              title={t('physicians')}
            />
          )}

          {conditionsList.length > 0 && (
            <SiteConditions
              conditions={conditionsList}
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
  params: { id },
}: SiteProps): Promise<Metadata> {
  const site = await getSiteById(id);

  if (!site) notFound();

  const headersInstance = headers();
  const url = headersInstance.get('x-url');

  return setMetadata({ url, site });
}
