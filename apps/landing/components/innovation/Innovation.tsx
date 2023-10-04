import { Tabs } from "@components/shared/tabs/Tabs"
import { TabItem } from "@components/shared/tabs/tabs.type"

export const Innovation = () => {

    const items: TabItem[] = [
        {
            name: "Un Ensayo Para Mí",
            content: <><h1>Un Ensayo Para Mí</h1></>
        },
        {
            name: "Un Ensayo Para Mí Onco",
            content: <></>
        },
        {
            name: "Management Portal",
            content: <></>
        },
        {
            name: "e-Diary",
            content: <></>
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