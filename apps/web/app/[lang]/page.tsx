'use client';

import { useLayoutEffect } from 'react';
import { useClientTranslation } from 'i18n';
import { Layout } from '../../components/core/layout/Layout';
import { SwitchLanguage } from '../../components/core/layout/language/SwitchLanguage';
import { errorResponseHandler } from '@core/error-handler';
import { useSite } from '@api/site/useSite';

export default function Page({ params }) {
  const { lang } = params;
  const { t } = useClientTranslation(lang);
  const { getSites } = useSite();

  const loadSites = async () => {
    try {
      await getSites();
    } catch (e) {
      errorResponseHandler(e);
    }
  };

  useLayoutEffect(() => {
    loadSites();
  }, []);

  return (
    <Layout>
      <SwitchLanguage />
    </Layout>
  );
}
