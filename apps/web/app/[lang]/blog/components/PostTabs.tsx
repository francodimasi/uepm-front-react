'use client';

import { useBlogStore } from '@store/useBlogStore';
import { Tabs } from 'ui';

export const PostTabs = () => {
  const { category, setCategory } = useBlogStore();

  return <Tabs items={[]} selected={category} onChange={setCategory} />;
};
