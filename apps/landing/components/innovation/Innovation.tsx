import { Tabs } from "@components/shared/tabs/Tabs"
import { TabItem } from "@components/shared/tabs/tabs.type"
import { UnEnsayoParaMi } from "./components/UnEnsayoParaMi"
import { UnEnsayoParaMiOnco } from "./components/UnEnsayoParaMiOnco"
import { ManagementPortal } from "./components/ManagementPortal"
import { EDiary } from "./components/EDiary"

export const Innovation = () => {

    const items: TabItem[] = [
        {
            name: "Un Ensayo Para Mí",
            content: <UnEnsayoParaMi />
        },
        {
            name: "Un Ensayo Para Mí Onco",
            content: <UnEnsayoParaMiOnco />
        },
        {
            name: "Management Portal",
            content: <ManagementPortal />
        },
        {
            name: "e-Diary",
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