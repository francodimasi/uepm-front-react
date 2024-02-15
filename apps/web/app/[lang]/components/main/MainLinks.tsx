import { ArrowForwardIcon, Button, L1 } from 'ui/core';
import { MainLinksProps } from './Main.types';
import Link from 'next/link';
import { useTranslations } from 'intl';

export const MainLinks = ({ className }: MainLinksProps) => {
  const t = useTranslations('home.main.links');

  return (
    <div className={className}>
      <Link
        href={process.env.NEXT_PUBLIC_PRODUCT_SPONSORS}
        target="_blank"
        className="flex-1"
      >
        <Button
          size="sm"
          fill="clear"
          color="dark"
          shape="square"
          expand="full"
          className="bg-white !w-full"
        >
          <L1 className="!pb-0" label={t('sponsor')} />
          <span className="bg-dark rounded-full aspect-square flex justify-center items-center p-2 w-10">
            <ArrowForwardIcon color="light" />
          </span>
        </Button>
      </Link>
      <Link
        href={process.env.NEXT_PUBLIC_PRODUCT_PHYSICIANS}
        target="_blank"
        className="flex-1"
      >
        <Button
          size="sm"
          fill="clear"
          color="dark"
          shape="square"
          expand="full"
          className="bg-white !w-full"
        >
          <L1 className="!pb-0" label={t('physician')} />
          <span className="bg-dark rounded-full aspect-square flex justify-center items-center p-2 w-10">
            <ArrowForwardIcon color="light" />
          </span>
        </Button>
      </Link>
    </div>
  );
};
