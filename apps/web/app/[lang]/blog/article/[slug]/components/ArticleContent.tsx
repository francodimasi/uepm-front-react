
import { ArticleContentProps } from '../Article.types';
import { LocaleProps } from 'intl';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { ArticleTags } from '@components/shared/articleTags';

export const ArticleContent: React.FC<ArticleContentProps & LocaleProps> = ({
  article,
}) => {
  return (
    <div className="pr-0 pb-12 lg:pb-16 lg:pr-12 flex flex-col col-span-1 lg:col-span-2 xl:col-span-3">
      <ImageWithFallback
        src={article.featured_image_src}
        alt={article.title.rendered}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '896px',
          maxHeight: '672px',
          margin: 'auto',
          paddingBottom: '1rem',
        }}
        width={896}
        height={672}
      />
      <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} className='article-content'/>
      <ArticleTags
        tags={article.tags}
        className='pb-1 pt-5 text-base font-medium leading-4 font-["DMSans"] uppercase'
      />
    </div>
  );
};
