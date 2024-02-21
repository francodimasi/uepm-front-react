import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@intl/navigation';
import { ArrowBackIcon, CheckIcon } from 'ui/core/icons';
import { headers } from 'next/headers';
import { Layout } from '@components/core/layout/Layout';
import { getTranslations, defaultLocale } from 'intl';
import { SiteProps } from './Site.types';
import { getSiteById } from '@api/sites/requests';
import { H3, Tag, H4, L1 } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { studyStatus } from './constants';
import { setMetadata } from './helpers';

const Page = async ({ params: { lang = defaultLocale, id } }: SiteProps) => {
  const site = await getSiteById(id);
  if (!site) notFound();
  const t = await getTranslations({ lang, namespace: 'sites' });
  const conditionsList = [];
  site.studies
    .filter((site) => site.status === studyStatus.RECRUITING)
    .map((st) =>
      st.translations
        .find((trans) => trans[lang])
        [lang].conditions_ct.map((cond) => {
          if (conditionsList.indexOf(cond) === -1) {
            conditionsList.push(cond);
          }
        }),
    );
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
            {site.studies.some(
              (study) => study.status === studyStatus.RECRUITING,
            ) && (
              <div className="justify-start items-start gap-2 inline-flex">
                <Tag
                  text={t('recruiting')}
                  className="p-2 px-4 bg-stone-200 uppercase rounded-full justify-end items-center inline-flex text-dark text-xs font-medium font-['DMSans] leading-none whitespace-nowrap"
                />
              </div>
            )}
            <p className='text-dark font-normal font-["DMSans"] leading-relaxed '>
              {site.description}
            </p>
          </div>
        </div>

        <div className="col-span-1 lg:row-span-2 pl-0 flex flex-col gap-12 lg:gap-10">
          <div
            className="flex flex-col justify-start items-start"
            style={{ backgroundColor: 'green' }}
          >
            <p>Card Flotante</p>
          </div>
        </div>

        <div className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 flex-col justify-start items-start gap-14 inline-flex divide-y divide-gray-medium">
          <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
            <H4
              label={t('specializations')}
              className="text-primary my-0 lg:my-0"
            />
            <div className="flex-col sm:flex-row justify-start items-start gap-2 flex flex-wrap">
              {site.keywords.map((kw, index) => (
                <Tag
                  text={kw}
                  key={index}
                  className="p-4 bg-stone-200 rounded-full justify-end items-center inline-flex text-base text-dark font-normal font-['DMSans'] leading-none whitespace-nowrap mt-2"
                />
              ))}
            </div>
          </div>

          {site.perks?.length > 0 && (
            <div className="w-full pt-14 flex-col justify-start items-start gap-4 inline-flex">
              <H4 label={t('benefits')} className="text-primary my-0 lg:my-0" />
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                {site.perks?.map((p, index) => (
                  <div
                    key={index}
                    className="self-stretch justify-start items-center gap-2 inline-flex"
                  >
                    <CheckIcon color="dark" />
                    <div className="text-dark text-base font-normal font-['DMSans'] leading-none">
                      {p}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {site.physicians?.length > 0 && (
            <div className="w-full pt-14 flex-col justify-start items-start gap-4 inline-flex">
              <H4
                label={t('physicians')}
                className="text-primary my-0 lg:my-0"
              />
              <div className="w-full grid sm:grid-cols-3 gap-x-36 gap-2">
                {site.physicians.map((py) => (
                  <div
                    key={py.id}
                    className="text-dark text-base font-normal font-['DMSans']"
                  >{`${py.first_name} ${py.last_name}`}</div>
                ))}
              </div>
            </div>
          )}

          {conditionsList.length > 0 && (
            <div className="w-full pt-14 flex-col justify-start items-start gap-4 inline-flex">
              <H4
                label="Estudios Abiertos"
                className="text-primary my-0 lg:my-0"
              />
              <div className="w-full grid sm:grid-cols-2 gap-x-16 gap-y-2 pb-3">
                {conditionsList.map((cond, index) => (
                  <div
                    key={index}
                    className=" self-stretch justify-start items-center gap-2 inline-flex"
                  >
                    <div className="text-dark text-base font-normal font-['DMSans']">{`${cond}`}</div>
                  </div>
                ))}
              </div>
              <div className="justify-center items-center inline-flex">
                <Link href="/" locale={lang}>
                  <L1 label={`${t('seeMore')}`} className="hover:underline" />
                </Link>
              </div>
            </div>
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
