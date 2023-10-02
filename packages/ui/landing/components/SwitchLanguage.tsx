"use client";

import { Language, LanguageContext, useLanguage } from "i18n";
import { useContext } from "react";
type SwitchLanguageProps = {
    languages: Language[],
    className?: string;
}
export const SwitchLanguage = ({ languages, className = "" }: SwitchLanguageProps) => {

    const { changeLanguage } = useLanguage();
    const { lang } = useContext(LanguageContext)

    return (
        <select className={`bg-transparent ${className}`} onChange={(e) => changeLanguage(e.target.value)} value={lang}>
            {
                languages.map((lang, index) => (
                    <option className="text-dark" key={index} value={lang.iso}>{lang.name}</option>
                ))
            }
        </select>
    )
}