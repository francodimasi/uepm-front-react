"use client";

import { Language, LanguageContext, useLanguage } from "i18n";
import { useContext } from "react";
type SwitchLanguageProps = {
    languages: Language[]
}
export const SwitchLanguage = ({ languages }: SwitchLanguageProps) => {

    const { changeLanguage } = useLanguage();
    const { lang } = useContext(LanguageContext)

    return (
        <select onChange={(e) => changeLanguage(e.target.value)} value={lang}>
            {
                languages.map((lang, index) => (
                    <option key={index} value={lang.iso}>{lang.name}</option>
                ))
            }
        </select>
    )
}