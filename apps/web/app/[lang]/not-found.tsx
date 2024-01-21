'use client';

import { Layout } from '@components/core/layout/Layout';
import { useTranslations } from 'intl';
import Link from 'next/link';
import { ArrowBackIcon, Button, H1, H2, P1 } from 'ui/core';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <H1 className="text-primary-dark !mb-0 !pb-0">{t('status')}</H1>
        <H2 className="tracking-tight">{t('title')}</H2>
        <P1 className="mt-6 text-base leading-7 text-gray-600">
          {t('description')}
        </P1>
        <div className="mt-10">
          <Link href="/">
            <Button fill="solid" color="dark" expand="none" size="sm">
              <ArrowBackIcon color="light" />
              {t('goBack')}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
