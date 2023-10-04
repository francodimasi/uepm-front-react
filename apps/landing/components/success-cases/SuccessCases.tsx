import { LanguageContext, useClientTranslation } from "i18n";
import { useContext } from "react";
import { H2 } from "ui";
import { CasesContainer } from "./components/CasesContainer";

export const SuccessCases = () => {

  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, { keyPrefix: "successCases" });
  
  return (
    <section className="bg-success-cases bg-bottom bg-no-repeat bg-[length:100%_70%] pb-24 pt-4">
      <div className="container">
        <H2 className="mb-16 text-light">{t('title')}</H2>
        <CasesContainer />
      </div>
    </section>
  );
};