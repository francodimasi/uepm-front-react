import { Language, LanguageContext, useClientTranslation } from 'i18n';
import { useMemo, useContext, ServerContext } from 'react';

export const useMenu = () => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, { keyPrefix: 'menu' });
  const { t: tlang } = useClientTranslation(lang, {
    keyPrefix: 'common.languages',
  });
  const links = useMemo(() => {
    return [
      { title: t('whereWeWork'), url: '' },
      { title: t('successCases'), url: '' },
      { title: t('products'), url: '' },
      { title: t('contact'), url: '' },
      { title: t('uepm'), url: '' },
    ];
  }, []);

  const languages: Language[] = useMemo(
    () => [
      {
        iso: 'en',
        name: tlang('en'),
      },
      {
        iso: 'es',
        name: tlang('es'),
      },
    ],
    [],
  );

  return {
    links,
    languages,
  };
};
