'use client';

import { useLanguage } from 'i18n';

export const SwitchLanguage = () => {
  const { changeLanguage } = useLanguage();
  return (
    <>
      <ul>
        <li>
          <button onClick={() => changeLanguage('es')}>Switch to ES</button>
        </li>
        <li>
          <button onClick={() => changeLanguage('en')}>Switch to EN</button>
        </li>
      </ul>
    </>
  );
};
