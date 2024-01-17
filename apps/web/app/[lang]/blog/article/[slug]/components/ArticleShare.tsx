'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'intl';
import { Share } from 'ui/components';
import { Button, ShareOutlineIcon } from 'ui/core';
import { shareNetworks } from '../constants';
import { ArticleShareProps } from '../Article.types';

export const ArticleShare = ({ quote, tags }: ArticleShareProps) => {
  const tActions = useTranslations('actions');
  const t = useTranslations('blog.article.share');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color="dark"
        fill="clear"
        expand="none"
        className="hidden sm:block pe-1"
        onClick={() => setOpen(true)}
      >
        {tActions('share')}
        <ShareOutlineIcon color="dark" />
      </Button>
      <Button
        color="dark"
        fill="clear"
        className="sm:hidden pe-1"
        iconOnly
        onClick={() => setOpen(true)}
      >
        <ShareOutlineIcon color="dark" />
      </Button>
      <Share
        title={t('title')}
        description={t('description')}
        link={`${process.env.NEXT_PUBLIC_DOMAIN}${pathname}`}
        quote={quote}
        tags={tags?.map((tag) => tag.name)}
        networks={shareNetworks}
        open={open}
        onClose={() => setOpen(false)}
        copyText={t('copyLabel')}
        copiedText={t('copiedLabel')}
      />
    </>
  );
};
