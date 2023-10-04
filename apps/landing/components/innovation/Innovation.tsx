import { Tabs } from "@components/shared/tabs/Tabs"
import { TabItem } from "@components/shared/tabs/tabs.type"
import { UnEnsayoParaMi } from "./components/UnEnsayoParaMi"
import { UnEnsayoParaMiOnco } from "./components/UnEnsayoParaMiOnco"
import { ManagementPortal } from "./components/ManagementPortal"
import { EDiary } from "./components/EDiary"
import { LanguageContext, useClientTranslation } from "i18n"
import { useContext } from "react"

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
            <section>
                <div className="container">
                    <Tabs items={items}/>
                </div>
            </section>
        </>
    )
}