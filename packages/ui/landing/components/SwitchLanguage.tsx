'use client';

import { Language, LanguageContext, useLanguage } from 'i18n';
import { ServerContext, useContext } from 'react';
type SwitchLanguageProps = {
  languages: Language[];
  className?: string;
  iso?: boolean;
};
export const SwitchLanguage = ({
  languages,
  className = '',
  iso,
}: SwitchLanguageProps) => {
  const { changeLanguage } = useLanguage();
  const { lang } = useContext(LanguageContext as ServerContext<any>);

  return (
    <select
      className={`bg-transparent ${className}`}
      onChange={(e) => changeLanguage(e.target.value)}
      value={lang}
    >
      {languages.map((lang, index) => (
        <option className="text-dark" key={index} value={lang.iso}>
          {iso ? lang.iso.toUpperCase() : lang.name}
        </option>
      ))}
    </select>
  );
};
