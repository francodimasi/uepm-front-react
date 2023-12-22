'use client';

import { useLayoutEffect } from 'react';
import { Layout } from '../../components/core/layout/Layout';
import { SwitchLanguage } from '../../components/core/layout/language/SwitchLanguage';
import { errorResponseHandler } from '@core/error-handler';
import { siteRequests } from '@api/site/useSite';

export default function Page() {
  const { getSites } = siteRequests();

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
