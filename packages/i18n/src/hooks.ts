'use client';
import { useEffect, useState } from 'react';

export const useLanguage = () => {
  const [path, setPath] = useState<string>('');
  const [pathname, setPathname] = useState<string>('');

  const changeLanguage = (lang: string) => {
    const splited = pathname.split('/');
    if (lang === splited[1]) return;
    splited.splice(0, 2);
    const path = `/${[lang, ...splited].join('/')}`;
    setPath(path);
  };

  useEffect(() => {
    if (path) {
      window.location.replace(path);
    }
  }, [path]);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return {
    changeLanguage,
  };
};
