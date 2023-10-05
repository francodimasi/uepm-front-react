import { Tabs } from "@components/shared/tabs/Tabs"
import { TabItem } from "@components/shared/tabs/tabs.type"
import { UnEnsayoParaMi } from "./components/UnEnsayoParaMi"
import { UnEnsayoParaMiOnco } from "./components/UnEnsayoParaMiOnco"
import { ManagementPortal } from "./components/ManagementPortal"
import { EDiary } from "./components/EDiary"
import { LanguageContext, useClientTranslation } from "i18n"
import { useContext } from "react"
import { H2 } from "ui"

export const Innovation = () => {

    const { lang } = useContext(LanguageContext)
    const { t } = useClientTranslation(lang, { keyPrefix: "innovation" });

    const items: TabItem[] = [
        {
            name: t('uepm.title'),
            content: <UnEnsayoParaMi />
        },
        {
            name: t('uepmOnco.title'),
            content: <UnEnsayoParaMiOnco />
        },
        {
            name: t('managementPortal.title'),
            content: <ManagementPortal />
        },
        {
            name: t('ediary.title'),
            content: <EDiary />
        },
    ]

    return (
        <>
            <section className="pt-28 relative">
                <div className="absolute w-full h-full top-0 left-0 bg-innovation bg-cover opacity-60"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-12 mb-28">
                        <div className="col-span-6">
                            <span className="block text-light uppercase mb-6"></span>
                            <H2 className="text-light">{t('title')}</H2>
                        </div>
                        <div className="col-span-6 flex items-end pl-28">
                            <p className="text-light">
                                {t('description')}
                            </p>
                        </div>
                    </div>
                    <Tabs items={items} />
                </div>
            </section>
        </>
    )
}