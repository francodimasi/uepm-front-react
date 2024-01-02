import { Link } from '@intl/navigation';
import { ArticleOfInterestProps } from '../Article.types';
import { ArticleTags } from '../../../../../../components/shared/articleTags/ArticleTags';
import { LocaleProps } from 'intl';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';

export const ArticleOfInterest: React.FC<
  ArticleOfInterestProps & LocaleProps
> = ({ article, locale }) => {
  if (!article) return null;

  return (
    <div className="flex flex-col pb-6 border-b border-dark border-opacity-20">
      <div className="pb-8 text-primary text-2xl font-semibold font-['Lexend'] leading-7">
        Te podría interesar
      </div>
      <Link href={`/blog/article/${article.slug}` as any} locale={locale}>
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '384px',
            maxHeight: '256px',
            margin: 'auto',
          }}
          width={384}
          height={256}
        />
      </Link>
      <ArticleTags tags={article.tags} className="pt-4" />
      <Link href={`/blog/article/${article.slug}` as any} locale={locale}>
        <span className="text-dark text-base font-semibold font-['Lexend']">
          {article.title}
        </span>
      </Link>
      <span className="pt-2 text-dark text-xs font-normal font-['DMSans'] uppercase">
        {article.date}
      </span>
    </div>
  );
};
