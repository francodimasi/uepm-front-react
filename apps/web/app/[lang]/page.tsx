'use client';

import { useLayoutEffect } from 'react';
import { Layout } from '../../components/core/layout/Layout';
import { errorResponseHandler } from '@core/error-handler';
import { useSite } from '@api/site/useSite';

export default function Page() {
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

  return <Layout></Layout>;
}
