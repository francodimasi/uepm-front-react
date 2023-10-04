import { LandingButton } from "ui"
import uepm from "public/images/innovation/uepm-innovation.png"
import Image from "next/image"
import { useContext } from "react"
import { LanguageContext, useClientTranslation } from "i18n"

export const UnEnsayoParaMiOnco = () => {
    const { lang } = useContext(LanguageContext)
    const { t } = useClientTranslation(lang, { keyPrefix: "innovation.uepmOnco.content" });

    return (
        <>
            <div className="grid grid-cols-12 text-light">
                <div className="col-span-6">
                    <Image className="w-full" src={uepm} alt="uepm" />
                </div>
                <div className="col-span-6 pl-28 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-2xl mb-9">{t('title')}</h3>
                        <p>
                            {t('text')}
                        </p>
                    </div>
                    <div>
                        <span className="block font-bold mb-9">{t('helper')}</span>
                        <LandingButton size="medium" color="secondary" outlined={true} className="table">{t('button')}</LandingButton>
                    </div>
                </div>
            </div>
        </>
    )
}