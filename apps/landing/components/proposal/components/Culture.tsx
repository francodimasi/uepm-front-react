import { LanguageContext, useClientTranslation } from "i18n"
import Image from "next/image"
import culture from "public/images/proposal/culture.png"
import { useContext } from "react"

export const Culture = () => {

    const { lang } = useContext(LanguageContext)
    const { t } = useClientTranslation(lang, { keyPrefix: "proposal.culture.content" });

    return (
        <div>
            <div className="grid grid-cols-2 text-light">
                <div className="col-span-2 lg:col-span-1 mb-10 lg:mb-0 lg:pr-16 2xl:pr-28 lg:flex flex items-center">
                    <div>
                        <p>
                            {t('text')}
                        </p>
                        <p className="font-bold text-2xl mt-8">
                            {t('textBold')}
                        </p>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <div className="w-full">
                        <Image className="w-full" src={culture} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}